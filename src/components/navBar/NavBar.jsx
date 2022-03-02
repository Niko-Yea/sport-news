import { Nav, Navbar } from "react-bootstrap";
import styles from "./navBar.module.scss";

export default function NavBar() {
  return (
    <Navbar className="navbar navbar-dark bg-dark navbar-expand-sm">
      <div className="container-fluid">
        <Nav>
          <Nav.Item>
            <Nav.Link className={styles.navBarBrand} href="/">
              Logo
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </Navbar>
  );
}
