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
            match.home_team_info = homeTeam || createDummyTeamForDisplay();
            

            const awayTeamId = match.away_team;
            const awayTeam = teams.find(x => x.id === awayTeamId);
            match.away_team_info = awayTeam || createDummyTeamForDisplay();
            
            
            const homeTeamIndex = teams.findIndex((team) => {
                return team.teamId == homeTeamId;
            });

            const awayTeamIndex = teams.findIndex((team) => {
                return team.teamId == awayTeamId;
            });

            if (homeTeam) 
                createOrUpdateTeams(groups[groupId], homeTeam, match.finished, match.home_team_result, match.away_team_result);
            if (awayTeam)
                createOrUpdateTeams(groups[groupId], awayTeam, match.finished, match.away_team_result, match.home_team_result);
        });
        groups[groupId].teams = groups[groupId].teams.sort(compareFixtures);
    });

    return groups;
}


const createOrUpdateTeams = (group, team, finished, result, againstResult ) => {
    const groupTeam = group.teams.find(x => x.id === team.id);
    if (groupTeam) {
        // Update
        if (finished) groupTeam.played += 1;

        if (result) {
            if (result > againstResult) {
                groupTeam.win += 1;
                groupTeam.points += 3;
            } else if (result == againstResult) {
                groupTeam.draw += 1;
                groupTeam.points += 1;
            } else if (result < againstResult) groupTeam.lose += 1;

            groupTeam.goalFor += result;
            groupTeam.goalAgainst += againstResult;
        }
    } else {
        // Create
        group.teams.push({
            ...team,
            played: 0,
            win: 0,
            draw: 0,
            lose: 0,
            goalFor: 0,
            goalAgainst: 0,
            points: 0
        });
    }
}
const createDummyTeamForDisplay = () => ({
    name: 'TBA',
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