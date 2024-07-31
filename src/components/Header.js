import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand href="/" className="mx-auto fw-bold" style={{ fontSize: '3rem' }}>Roadmaps</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
