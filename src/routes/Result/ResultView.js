import React from 'react'
import Leaderboard from 'components/Leaderboard'
import PageTitle from 'components/PageTitle'

class ResultView extends React.Component {
    render() {
        return (
            <div className="container">
                <PageTitle>Prediction Result</PageTitle>
                <Leaderboard />
            </div>
        )
    }
}
export default ResultView;