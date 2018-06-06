import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router'
import { withRouter } from 'react-router'
import Main from './Main';
import Qualifier from './Qualifier';
import Knockout from './Knockout';
import Fixture from './Fixture';
import Result from './Result';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route {...rest} render={(props) => (
            authenticated === true
        ? <Component {...props} />
        : <Redirect to={'/'} />
    )
} />
)

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <PrivateRoute authenticated={this.props.authenticated} path="/Qualifier" component={Qualifier}/>
                <PrivateRoute authenticated={this.props.authenticated} path="/Knockout" component={Knockout}/>
                <PrivateRoute authenticated={this.props.authenticated} path="/Fixtures" component={Fixture}/>
                <PrivateRoute authenticated={this.props.authenticated} path="/Result" component={Result}/>
            </Switch>
        );
    }
}
const mapStateToProps = (state) => ({
    authenticated: state.user.authenticated,
})

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(
      mapStateToProps,
      mapDispatchToProps
  )(Routes))