import '../App.css';
import { Button,Navbar,Container,Badge,Nav,NavDropdown,Row,Col, Image, Card, Figure, Stack, ListGroup, CardGroup } from 'react-bootstrap';


function Body() {
    return (
      <>

    
    <Container className='body' >

   
    <Row>
        <Image src={require('../Images/pain.jpg')} />
        
      </Row> 

       <br/>
       <br/>
    <Row>

        <Col sm={8}>
        <Figure>
        <h1>JointEase Pain Relief Spray</h1>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={require('../Images/bottle.jpg')}
      />
      
      <Figure.Caption>
      <p>Joint Ease Fast Action Pain Relief Spray is one of the most impressive and successful products of BARAKA Naturals (Sri Lanka).</p>
      <p>●	It consists entirely of natural components. Therefore, it acts gently without causing side effects.</p>
            <p>●	It provides instant pain relief for joints, muscular pains and back ache associated with arthritis, sprains, cramps and stiffness.</p>
            <p>●	This unique formula is made out of a special blend of essential oils along with the complete goodness of black seeds.</p>
            
      </Figure.Caption>
    </Figure>
        </Col>

        <Col sm={4}><Image src={require('../Images/trio.jpg')} thumbnail/></Col>
      </Row>
        <br>
        </br>
      <Row>
      <Col sm={8}> 
            <Figure>
              <h1>The Miracle of the Black Seed</h1>
            <Figure.Image
              src={require('../Images/blackseed.jpg')}
            />
            
            <Figure.Caption>
            <p>Black seed oil is well known for its powerful medicinal properties, among which are:</p>

            <p>●	wound healing</p>
                  <p>●	skin, hair problems</p>
                  <p>●	diabetes</p>
                  <p>●	liver and kidney function</p>
                  <p>●	infertility</p>
                  <p>●	cancer</p>
                  <p>It treats body at the cellular level.</p>
                  
            </Figure.Caption>
          </Figure>
      </Col>
        <br></br>
        <Col sm={4}> <Image src={require('../Images/ingredients.jpg')} thumbnail/></Col>
      </Row>
      <br></br>
      <Row>
      <Card>
        <Card.Body>
          <Card.Text className='d-flex justify-content-center'>
          <h1>For whom is this amazing remedy?</h1>
      </Card.Text>
        
        </Card.Body>
        <Card.Img variant="bottom"  src={require('../Images/gympamore.jpg')} />
        <br></br>
        <Card.Text>
          <p>&#x2713; It’s great for people in sports </p>
          <p>&#x2713; People with joint problems (knee pain, back pain, arthritis)</p>
          <p>&#x2713; Seniors.</p>
          </Card.Text>
      </Card>

      </Row>
      <br></br>
      <Row>
        <Col sm={4}><Image src={require('../Images/spray.jpg')} thumbnail/></Col>
        <Col sm={8}>
          <Card style={{ width: '20rem' }}>
          <Card.Header><h3>If you feel:</h3>  </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>-muscle pain</ListGroup.Item>
            <ListGroup.Item>-joint pain</ListGroup.Item>
            <ListGroup.Item>-got a sprain</ListGroup.Item>
            <ListGroup.Item>-have back pain</ListGroup.Item>
            <ListGroup.Item>-stiffness and cramps</ListGroup.Item>
          </ListGroup>
        </Card>
          <br></br>
    
        <p>	This spray will remove pain in a short time.</p>
        <p>Because of black seeds oil is one of the main components, it has a healing therapeutic and prophylactic effect. </p>
        <p>It is well suited as a first aid for minor muscle or joint injuries, as it has a powerful cooling effect.</p>
        <p>Great thing to take along to a gym!</p>
    </Col>
      </Row>
      <br></br>

      <Row>
        <Col><h3>JointEase Pain Relief Spray has already gained popularity in Singapore.</h3>
        <br></br>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src={require('../Images/singapore.jpg')} />
        <Card.Body>
          <Card.Text>
          The spray is great for senior people with joints pain, back pain. 
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={require('../Images/grandma.jpg')} />
        <Card.Body>
          
          <Card.Text>
          Your grandmother will appreciate the lasting effect (up to 40 minutes) of the menthol, black pepper and essential oils on her sick knees. Great for applying to the neck-and-collar area before bed, providing a soothing and relaxing effect.
{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={require('../Images/tao.jpg')} />
        <Card.Body>
        <Card.Text>
        Joints pain cannot be ignored!{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Col>
      </Row>
      <br></br>

      <Row>
        <Col>
        <h5>As soon as the first signs of pain appear, it is necessary to urgently take action. Your body health is your responsibility!</h5>
        <br></br>
        <p>&#x2713; Instant pain relief</p>
        <p>&#x2713; Treatment of affected tissues</p>
        <p>&#x2713; Prevention of joint and bone diseases</p>
        <p>&#x2713; Ensures tissue regeneration</p>
        <br></br>
        <h5>The spray is totally safe and can be use for the whole family, even for kids!</h5>
        <h5>For senior citizens additional 5% discount!</h5>
        <br></br>
        <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Header>Presentations:</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>100ml can</ListGroup.Item>
              <ListGroup.Item>Ingredients:</ListGroup.Item>
              <ListGroup.Item>Menthol, Camphor</ListGroup.Item>
              <ListGroup.Item>Eucalyptus oil</ListGroup.Item>
              <ListGroup.Item>Wintergreen Oil</ListGroup.Item>
              <ListGroup.Item>Peppermint Oil</ListGroup.Item>
              <ListGroup.Item>Black Pepper Oil and Black seed oil.</ListGroup.Item>
            </ListGroup>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Header>Shelf life:</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Three years</ListGroup.Item>
              <ListGroup.Item>Directions for use:</ListGroup.Item>
              <ListGroup.Item>Hold the can 5-10 cm away and spray directly into the areas requiring the most urgent treatment.</ListGroup.Item>
              <ListGroup.Item>Do not use more than three times a day.</ListGroup.Item>
              <ListGroup.Item>Certifications:</ListGroup.Item>
              <ListGroup.Item>GMP, HACCP, ISO 22000, ISO 14001</ListGroup.Item>
            </ListGroup>
          </Card>

        </CardGroup>
        
        </Col>
        <br></br>
      </Row>
    </Container>
      </>

      );
    }
  
  export default Body;