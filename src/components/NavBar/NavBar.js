import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="fs-2">
            <span>
              <i class="fa-solid fa-brain"></i>
            </span>{" "}
            Quiz Mania
          </Navbar.Brand>
          <Nav className="ms-auto menu">
            <NavLink to={`/`}>Topics</NavLink>
            <NavLink to={`/statistics`}>Statistics</NavLink>
            <NavLink to={`/blogs`}>Blogs</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
