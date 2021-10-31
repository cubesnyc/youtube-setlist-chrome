import { Container, Navbar, Nav } from "react-bootstrap";

export const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="#home">YouTube Setlist</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                target="_blank"
                href="https://github.com/jodylecompte/youtube-setlist-chrome"
              >
                Support
              </Nav.Link>
              <Nav.Link
                target="_blanl"
                href="https://github.com/jodylecompte/youtube-setlist-chrome/issues/new"
              >
                Report a Bug
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
