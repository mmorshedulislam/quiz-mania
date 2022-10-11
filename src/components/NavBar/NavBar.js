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
          <NavLink to={`/`} className={`text-decoration-none`}>
            <Navbar.Brand href="#home" className="fs-2">
              <span>
                <i class="fa-solid fa-brain"></i>
              </span>{" "}
              Quiz Mania
            </Navbar.Brand>
          </NavLink>
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
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
