export const fetchWorldCupData = () => {
    return fetch('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json').then((response) => { 
        return response.json() 
    }).then((data) => {
        return {
            teams: data.teams,
            groups: processGroupInfo(data.teams, data.groups),
            knockout: processGroupInfo(data.teams, data.knockout),
            
        }
    });
}


const processGroupInfo = (teams, groups) => {
    Object.keys(groups).forEach((groupId) => {
        groups[groupId].teams = []
        groups[groupId].matches.forEach((match) => {
            const homeTeamId = match.home_team;
            const homeTeam = teams.find(x => x.id === homeTeamId);
            match.home_team_info = homeTeam || createDummyTeamForDisplay(homeTeamId, match.type);
            
            const awayTeamId = match.away_team;
            const awayTeam = teams.find(x => x.id === awayTeamId);
            match.away_team_info = awayTeam || createDummyTeamForDisplay(awayTeamId, match.type);
            match.pwinner = getPredictionResult(match);
            if (homeTeam) 
                createOrUpdateTeams(groups[groupId], homeTeam, match.finished, match.home_result, match.away_result);
            if (awayTeam)
                createOrUpdateTeams(groups[groupId], awayTeam, match.finished, match.away_result, match.home_result);
            
        });
        groups[groupId].teams = groups[groupId].teams.sort(compareFixtures);
    });

    return groups;
}


const createOrUpdateTeams = (group, team, finished, result, againstResult ) => {
    let groupTeam = group.teams.find(x => x.id === team.id);
    if (!groupTeam) {
        groupTeam = {
            ...team,
            played: 0,
            win: 0,
            draw: 0,
            lose: 0,
            goalFor: 0,
            goalAgainst: 0,
            points: 0
        };
        group.teams.push(groupTeam);
    };
    // Update
    if (finished) { groupTeam.played += 1;
        if (result > againstResult) {
            groupTeam.win += 1;
            groupTeam.points += 3;
        } else if (result === againstResult) {
            groupTeam.draw += 1;
            groupTeam.points += 1;
        } else if (result < againstResult) groupTeam.lose += 1;

        groupTeam.goalFor += result;
        groupTeam.goalAgainst += againstResult;
    
    }
}
const getPredictionResult = (match) => {
    if(!match.finished) return null;
    const home_score = match.home_result;
    const away_score = match.away_result;
    if(match.home_penalty || match.away_penalty) {
        return home_score + match.home_penalty > away_score + match.away_penalty ? "homep" : "awayp";
    }
    if(home_score > away_score) return "home";
    else if(home_score < away_score) return "away";
    return "draw";
}
const createDummyTeamForDisplay = (teamId, matchType) => ({
    name: isNaN(teamId) ? teamId.split('_').map(jsUcfirst).join(' ') : jsUcfirst(matchType)+' #'+teamId,
    emojiString: '\u2754'
});

const compareFixtures = (a, b) => {
    if (a.points < b.points) return -1;
    if (a.points > b.points) return 1;
    if (a.points === b.points) {
        if(a.goalFor - a.goalAgainst < b.goalFor - b.goalAgainst) return -1
        if(a.goalFor - a.goalAgainst > b.goalFor - b.goalAgainst) return 1
        return a.name.localeCompare(b.name);
    }
}
const jsUcfirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);
