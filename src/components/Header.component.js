import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";

export class Header extends React.Component {

    
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-main">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Brand</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                <button onClick={this.props.toggleSidebar}>Toggle Sidebar</button>
      </NavItem>
      
            <Navbar.Text>
              Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
            </Navbar.Text>
            <Navbar.Text pullRight>Have a great day!</Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </header>
    );
  }
}
export default Header;
