import React from "react";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";

// Logos
import ZealLogo from "../assets/img/logos/zeal-logo-withoutBg.png";
import WhiteLogo from "../assets/img/logos/zeal-logo-whiteWithoutBg.png";

// components
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';

// Links
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Routes } from "../routes";
import ExampleText from "../assets/img/technologies/example-text.png"


class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  renderNavBar = () => {
    return(
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ZealLogo} />
            <span className="ms-2 brand-text d-none d-md-inline">Zeal</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#features">Features</Nav.Link>
                <Nav.Link as={HashLink} to="#pages">Pages</Nav.Link>
                <Nav.Link as={HashLink} to="#folder" className="d-sm-none d-xl-inline">Folder Structure</Nav.Link>
                <Nav.Link as={HashLink} to="#getting-started">Getting Started</Nav.Link>
                <Nav.Link as={HashLink} to="#download">Upgrade to Pro</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    )
  }

  renderHeader = () => {
    return(
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><Image src={WhiteLogo} alt="Simple Textbox" /></div>
              <h1 className="fw-bolder text-secondary">Zeal</h1>
              <p className="text-muted fw-light mb-5 h5">Building teams effortlessly</p>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }

  headerTransition = () => {

  }

  render() {
      return(
        <div>
          {this.renderNavBar()}
          {this.renderHeader()}
          esdfsd
        </div>
      )
  }
}
export default Presentation
