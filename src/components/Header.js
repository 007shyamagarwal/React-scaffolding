import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{ height: '50px' }} bg="light">
      <Navbar.Brand>Emirates</Navbar.Brand>
      {/* <Nav>
        <Nav.NavLink>
          <NavLink to="/home">Airport Data</NavLink>
        </Nav.NavLink>
        <Nav.NavLink>
          <NavLink to="/home">DashBoard</NavLink>
        </Nav.NavLink>
      </Nav> */}
    </Navbar>
  );
};

export default withRouter(Header);
