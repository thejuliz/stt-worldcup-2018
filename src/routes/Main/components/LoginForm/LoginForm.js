import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Row, Col, FormControl, FormGroup, ControlLabel, HelpBlock, Button, InputGroup } from 'react-bootstrap' 

const FieldGroup = ({ id, label, help, addon, ...props }) => 
    (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <InputGroup>
        <InputGroup.Addon>{addon}</InputGroup.Addon>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
        </InputGroup>
      </FormGroup>
    );

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.doLogin = this.doLogin.bind(this)
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount() {
        this.props.validate();
    }
    componentWillReceiveProps(nextProps) {
        const { authenticated } = nextProps;
        if(authenticated) {
            this.props.redirect("/Fixtures");
        }
    }
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }
    doLogin() {
        const { username, password } = this.state
        this.props.login(username, password)
    }
    render() {
        return (
            <form>
            <Grid>
                <Row>
                    <Col mdOffset={4} md={4}>
                    <FieldGroup
                    id="username"
                    type="text"
                    label="Username"
                    addon="INSET/"
                    placeholder="Enter Username"
                    onChange={this.handleUsernameChange}
                    />
                    </Col>

                </Row>
                <Row>
                    <Col mdOffset={4} md={4}>
                    <FieldGroup
                    id="password"
                    type="password"
                    label="Password"
                    addon={(<span>&nbsp;&nbsp;-&nbsp;<span className="glyphicon glyphicon-lock"></span>&nbsp;-&nbsp;</span>)}
                    placeholder="Enter Password"
                    onChange={this.handlePasswordChange}
                    />
                    </Col>
                </Row>
                <Row>
                    <Col mdOffset={4} md={4} className='text-center'>
                        <Button 
                            type="submit"
                            onClick={this.doLogin}
                            disabled={this.props.isLoggingIn}
                        >Login</Button>
                    </Col>

                </Row>
            </Grid>
            </form>
        )
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    isLoggingIn: PropTypes.bool,
    authenticated: PropTypes.bool
}
LoginForm.defaultProps = {
    isLoggingIn: false,
    authenticated: false
}
export default  LoginForm;