import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#101041", minHeight: "80px", color: "#fff" }}
    >
      <Container>
        <Navbar.Brand href="#Home" style={{ color: "#fff" }}>
          User-Page
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor: "#fff"}}  />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home" style={{ color: "#fff" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#About" style={{ color: "#fff" }}>
              About
            </Nav.Link>
            <Nav.Link href="#Contact" style={{ color: "#fff" }}>
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <style type="text/css">
        {`
  .nav-link:after{
    content: "";
    position: absolute;
    width: 0%;
    height: 1px;
    display: block;
    transition: all 0.3s ease;
    bottom: 25%;
    transition:all 0.4s ease-in;
  }
  .nav-link:hover::after{
    width: 45px;
    height: 1px;
    background-color: #fff;
  }

    `}
      </style>
    </Navbar>
  );
}

export default BasicExample;
