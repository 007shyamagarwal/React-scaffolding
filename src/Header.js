import React from 'react';
import { Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar style={{ height: '50px' }} bg="light">
      <Navbar.Brand>Company Name</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
