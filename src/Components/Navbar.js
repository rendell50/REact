

import '../App.css';
import { Button,Navbar,Container,Image,Nav,NavDropdown,Col, Row, Breadcrumb  } from 'react-bootstrap';






function Navigation() {
    return (
      <>
     
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container >
        <Row>
          <Col xs={6} md={4} >
          <Navbar.Brand href="">

              <Image src={require('../Images/baraka.png')} />
            
          </Navbar.Brand>
          </Col>   
        </Row>
      


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        
          <Breadcrumb>
         
          <Breadcrumb.Item href="">Filipino</Breadcrumb.Item>
          <Breadcrumb.Item active>English</Breadcrumb.Item>
        </Breadcrumb>
       
        </Navbar.Collapse>

        
      </Container>
    </Navbar>
     
      
      </>
    );
  }

export default Navigation;