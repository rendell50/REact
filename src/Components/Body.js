import '../App.css';
import { Button,Navbar,Container,Badge,Nav,NavDropdown,Row,Col, Image, Card, Figure } from 'react-bootstrap';


function Body() {
    return (
      <>
    <Container className='body' fluid>
          <Row>
      
          <Image className='img-fluid max-width: 100%; height: auto;'  src={require('../Images/Joint_ease.jpg')} />
      </Row>
          <Row>

        <Col>
        <Figure>
        <h1>JointEase Pain Relief Spray</h1>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={require('../Images/bottle.jpg')}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>
        
        <p>Joint Ease Fast Action Pain Relief Spray is one of the most impressive and successful products of BARAKA Naturals (Sri Lanka).</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
        <Image />
        </Col>
        <Col xs={6} md={4}>
            <p>●	It consists entirely of natural components. Therefore, it acts gently without causing side effects.</p>
            <p>●	It provides instant pain relief for joints, muscular pains and back ache associated with arthritis, sprains, cramps and stiffness.</p>
            <p>●	This unique formula is made out of a special blend of essential oils along with the complete goodness of black seeds.</p>
            
        </Col>
        <Col xs={6} md={4}>
        <Image src={require('../Images/trio.jpg')} thumbnail/>
        </Col>
      </Row>
    </Container>
      </>

      );
    }
  
  export default Body;