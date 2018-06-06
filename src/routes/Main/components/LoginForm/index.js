import { connect } from 'react-redux'
import { login, validate } from 'actions/user'
import { push } from 'react-router-redux'
import LoginForm from './LoginForm'

const mapStateToProps = (state, props) => ({
    isLoggingIn: state.user.isLoggingIn,
    authenticated: state.user.authenticated
})

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username,password)),
    validate: (username, password) => dispatch(validate()),
    redirect: (path) => {
        dispatch(push(path))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)