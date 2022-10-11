import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../component/About";
import Contact from "../component/Contact";
import Home from "../component/Home";
import Court from "../component/Court";
import Victium from "../component/Victium";
import Accured from "../component/Accured";
import Investigator from "../component/Investigator";

function NavbarExample() {
  return (
    <BrowserRouter>
      <div>
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src="https://www.smiu.edu.pk/themes/smiu/images/logo_smiu.png"
                  width="80"
                  height="200"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/investigator">
                  Investigator
                </Nav.Link>
                <Nav.Link as={Link} to="/court">
                  Court of flow
                </Nav.Link>
                <Nav.Link as={Link} to="/victium">
                  Victium
                </Nav.Link>
                <Nav.Link as={Link} to="/accured">
                  Accured
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact us
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        <div>
          <Routes>
            <Route path="/investigator" element={<Investigator />} />

            <Route path="/court" element={<Court />} />

            <Route path="/victium" element={<Victium />} />

            <Route path="/accured" element={<Accured />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default NavbarExample;
