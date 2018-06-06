import React from 'react';
import NavHeader from 'components/NavHeader'
import Routes from '../../routes'

class CoreLayout extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps.authenticated && nextProps.authenticated) {
            this.props.retrievePredictionsByUserId(nextProps.username);
        }
    }
    componentWillMount() {
        this.props.retrieveWorldCupData().then(() => {
            this.setState({
                isReady: true
            })
        });
    }

    render() {
        if(this.props.isReady){
            return (
                <div>
                    <NavHeader />
                    <div style={{ paddingTop: '60px' }}>
                        <Routes/>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default CoreLayout