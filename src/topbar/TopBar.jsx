import "./TopBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import StyledNavDropdown from "../components/StyledNavDropdown";

function TopBar() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Rapid Clipz</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse className="navbar" id="navbar-dark-example">
          <Nav className="nav">
            <Nav.Link>Clip</Nav.Link>
            <Nav.Link>Slice</Nav.Link>
            <StyledNavDropdown
              title="Crop"
              actions={[{ label: "Iphone (320 x 568)" }, { label: "Freeform" }]}
            />
          </Nav>
          <Nav>
            <Nav.Link>Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
