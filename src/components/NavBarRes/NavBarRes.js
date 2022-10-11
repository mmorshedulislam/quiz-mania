import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <NavLink to={`/`} className={`text-decoration-none`}>
          <Navbar.Brand href="#home" className="fs-2">
            <span>
              <i class="fa-solid fa-brain"></i>
            </span>{" "}
            Quiz Mania
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto menu">
            <NavLink
              to={`/topics`}
              className={({ isActive }) =>
                isActive ? "bg-primary rounded" : ""
              }
            >
              Topics
            </NavLink>
            <NavLink
              to={`/statistics`}
              className={({ isActive }) =>
                isActive ? "bg-primary rounded" : ""
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to={`/blogs`}
              className={({ isActive }) =>
                isActive ? "bg-primary rounded" : ""
              }
            >
              Blogs
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
