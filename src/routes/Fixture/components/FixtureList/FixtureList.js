import React from 'react'
import MatchList from 'components/MatchList'
class FixtureList extends React.Component {
    constructor(props) {
        super(props);
        this.getQualifierRoundMatches = this.getQualifierRoundMatches.bind(this);
        this.getRound16Matches = this.getRound16Matches.bind(this);
        this.getRound8Matches = this.getRound8Matches.bind(this);
        this.getRound4Matches = this.getRound4Matches.bind(this);
        this.getRound2LoserMatches = this.getRound2LoserMatches.bind(this);
        this.getRound2Matches = this.getRound2Matches.bind(this);
    }
    getQualifierRoundMatches() {
        const { groups } = this.props;
        let matches = []
        Object.keys(groups).forEach(groupId => {
            matches = matches.concat(groups[groupId].matches);
        })
        return matches;
    }
    getRound16Matches() {
        return this.props.knockout.round_16.matches;
    }
    getRound8Matches() {
        return this.props.knockout.round_8.matches
    }
    getRound4Matches() {
        return this.props.knockout.round_4.matches
    }
    getRound2LoserMatches() {
        return this.props.knockout.round_2_loser.matches
    }
    getRound2Matches() {
        return this.props.knockout.round_2.matches
    }
    render() {
        return (
            <div>
                <h4>Qualifier Round</h4>
                <MatchList matches={this.getQualifierRoundMatches()} />
                <h4>{this.props.knockout.round_16.name}</h4>
                <MatchList matches={this.getRound16Matches()} />
                <h4>{this.props.knockout.round_8.name}</h4>
                <MatchList matches={this.getRound8Matches()} />
                <h4>{this.props.knockout.round_4.name}</h4>
                <MatchList matches={this.getRound4Matches()} />
                <h4>{this.props.knockout.round_2_loser.name}</h4>
                <MatchList matches={this.getRound2LoserMatches()} />
                <h4>{this.props.knockout.round_2.name}</h4>
                <MatchList matches={this.getRound2Matches()} />
            </div>
        );
    }
}
export default FixtureList;