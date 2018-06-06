import React from 'react'
import FixtureList from './components/FixtureList'
import PageTitle from 'components/PageTitle'

class FixtureView extends React.Component {
    render() {
        return (
            <div className="container">
                <PageTitle>Match Fixtures</PageTitle>
                <FixtureList />
            </div>
        )
    }
}

export default FixtureView;