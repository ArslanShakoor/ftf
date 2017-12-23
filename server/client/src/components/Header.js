import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import './index.scss';
class Header extends Component {
  render() {
    console.log(this.props);
    const appNavbar = (
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Link to={'/'}>
            <Navbar.Brand>FTF</Navbar.Brand>
          </Link>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <div className="row">
            <Nav pullRight>
              <LinkContainer to="/newticker">
                <NavItem>CREATE A NEW TICKER</NavItem>
              </LinkContainer>
              <LinkContainer to="/addvalue">
                <NavItem>ADD NEW STOCK VALUE</NavItem>
              </LinkContainer>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    );
    return <div>{appNavbar}</div>;
  }
}
// mapStateToProps(state){
//   return {auth: state.auth}
// }

export default Header;
