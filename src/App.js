import logo from './logo.svg';
import './App.css';
import { HelmetProvider } from 'react-helmet-async';




import * as ReactDOM from "react-dom/client";



import Home from './Components/Filipino';
import English from './Components/Body';
import { Link, Redirect, Routes, Route} from 'react-router-dom';
import { Button,Navbar,Container,Image,Nav,NavDropdown,Col, Row, Breadcrumb  } from 'react-bootstrap';




function App() {
  return (
    <div> 

<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ">
      <Container >
        <Row>
          <Col xs={6} md={4} >
          <Navbar.Brand href="">

              <Image src={require('./Images/baraka.png')} />
            
          </Navbar.Brand>
          </Col>   
        </Row>
      


        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>

        
          <Breadcrumb>
         
          <Breadcrumb.Item > <Link to="/">Filipino</Link></Breadcrumb.Item>
          <Breadcrumb.Item active><Link to="/english">English</Link></Breadcrumb.Item>
        </Breadcrumb>
       
        </Navbar.Collapse>

        
      </Container>
    </Navbar>
     
   
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/english' element={< English />}></Route>
                 
          </Routes>
          </div>
     
  
  
    

    
  );
}

export default App;
