import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Navbar, NavItem, Nav } from 'react-bootstrap'
import { push } from 'react-router-redux'
class NavHeader extends React.Component {
    render() {
        return (
            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">FIFA World Cup 2018</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem
                        href="/Qualifier"
                        onClick={(e) => {e.preventDefault(); this.props.redirect('/Qualifier')}}
                    >Qualifier Round</NavItem>
                    <NavItem
                        href="/Knockout"
                        onClick={(e) => {e.preventDefault(); this.props.redirect('/Knockout')}}
                    >Knockout Round</NavItem>
                    <NavItem
                        href="/Fixtures"
                        onClick={(e) => {e.preventDefault();this.props.redirect('/Fixtures')}}
                    >All Fixtures</NavItem>
                </Nav>
            </Navbar>
        )
    }
}
const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = dispatch => ({
    redirect: (path) => {
        dispatch(push(path))
    }
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(NavHeader);