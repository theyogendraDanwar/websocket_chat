import React from 'react';
import { Link } from 'react-router-dom'
import {
  Nav,
  Navbar,
  Container,
  NavbarBrand,
  Row,
  Col,
  NavItem,
  NavLink,
  UncontrolledCollapse,
} from 'reactstrap'
const Header = ({ isLoggedIn, ...props }) => {
  const handleEvent = (e) => {
    props.signout();
    e.preventDefault();
  }
  return (
    <Navbar className="navbar-dark bg-primary" expand="lg">
      <Container>
        <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
          WebSocket Chat
        </NavbarBrand>
        <button className="navbar-toggler" id="navbar-primary">
          <span className="navbar-toggler-icon" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-primary">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <img
                    alt="..."
                    src={require("../../assets/img/brand/blue.png")}
                  />
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button className="navbar-toggler" id="navbar-primary">
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="ml-lg-auto" navbar>
             {isLoggedIn && 
            <NavItem>
              <NavLink href="/" onClick={e => handleEvent(e)}>
                Sign Out <span className="sr-only">(current)</span>
              </NavLink>
            </NavItem>
             }
          </Nav>
        </UncontrolledCollapse>
      </Container>
    </Navbar>
  )
}

export default Header