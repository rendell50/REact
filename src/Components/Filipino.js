import '../App.css';

import { useEffect } from "react";
import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import { Button,Navbar,Container,Badge,Nav,NavDropdown,Row,Col, Image, Card, Figure, Stack, ListGroup, CardGroup,Modal  } from 'react-bootstrap';

function MydModalWithGrid(props) {
  
  return (
    <>
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Product details of JointEase Pain Relief Spray 100ml BARAKA
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <Row>
          <CardGroup>
          <Card style={{ width: '18rem' }}>
            <Card.Header>Presentations:</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>100ml can</ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
            <Card.Header>Ingredients:</Card.Header>
              <ListGroup.Item>Menthol, Camphor</ListGroup.Item>
              <ListGroup.Item>Eucalyptus oil</ListGroup.Item>
              <ListGroup.Item>Wintergreen Oil</ListGroup.Item>
              <ListGroup.Item>Peppermint Oil</ListGroup.Item>
              <ListGroup.Item>Black Pepper Oil and Black seed oil.</ListGroup.Item>
            </ListGroup>
         

          </Card>
          <Card style={{ width: '18rem' }} >
            <Card.Header>Shelf life:</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Three years</ListGroup.Item>
            </ListGroup>

            <Card.Header>Directions for use:</Card.Header>
            <ListGroup variant="flush">   
            <ListGroup.Item>Hold the can 5-10 cm away and spray directly into the areas requiring the most urgent treatment.</ListGroup.Item>
              <ListGroup.Item>Do not use more than three times a day.</ListGroup.Item>
            </ListGroup>

            <Card.Header>Certifications:</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>GMP, HACCP, ISO 22000, ISO 14001</ListGroup.Item>
              </ListGroup>
          </Card>

        </CardGroup>
         
          
        
          
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>

  );
}


function Filipino() {
  const [modalShow, setModalShow] = useState(false);
    return (
      <>

<Image lg={2}  src={require('../Images/pain.jpg')}fluid/>
    <Container className='body' >
   
 
    
    
    <Row>
       
        
      </Row> 
    
      
       <br/>
       <Row className='m-4'>
        <Col xs={4} md={4} lg={2}><Image src={require('../Images/bote.jpg')} thumbnail/>
        
        </Col>
        <Col xs={8} md={8} lg={10} >
          <h1>ORDER NOW TO GET 40% OFF! </h1>

          <div className='d-flex'>
          <p><s>&#8369;2650</s> </p> <p className='mx-3'>&#8369;1590</p>
            </div> 
          <div className='d-flex'>
            <p>  Sold 1486 </p> <p className='mx-3'>left for sale offer 524</p>
          </div> 
          <div className='d-flex'>
                <Button href="#order" className="" size="sm" variant="danger">
              Order Now
              </Button>
              <Button className='mx-2'variant="primary" size="sm"onClick={() => setModalShow(true)}>
              Product Details
              </Button>
              <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
            </div>
            <div className='my-3' >
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>

            </div>
                   
          </Col>
         
          <Col xs={8} md={8} lg={10}>
          <div>
             <h4>Product Reviews</h4> 
            </div>  
         </Col>
          
       
        
      </Row>
       <br/>
    <Row>

        <Col sm={8}>
        <Figure>
        <h1>JointEase Pain Relief Spray</h1>
      <Figure.Image className='mx-1'
        width={171}
        height={180}
        alt="171x180"
        src={require('../Images/bottle.jpg')}
      />
       <Figure.Image
        width={171}
        height={180}

        alt="171x180"
        src={require('../Images/benefits.jpg')}
      />
      
      <Figure.Caption>
      <p>Ang Joint Ease Fast Action Pain Relief Spray  ay isa sa pinakakahanga-hanga at matagumpay na produkto ng BARAKA Naturals sa (Sri Lanka).</p>
      <p>● Galing sa natural na sangkap. Kaya walang negatibong epekto sa katawan.</p>
            <p>●	Nag dudulot ng mabilis  na lunas sa ibat ibang sakit ng mga kasukasuan sa katawan.</p>
            <p>●	May kakaibang formula at may espesyal na sangkap ng langis ng black seed.</p>
            
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
              <h2>Ang pinaka mahalagang sangkap ay black seed oil</h2>
            
            <Figure.Image className='mx-3'
              src={require('../Images/blackseed.jpg')}
            />
            
            <Figure.Caption>
            <p>Kilala ang Black seed oil sa malakas na pinaka mabisa sangkap sa pagpapa galling tulad ng mga sumusunod: </p>

            <p>●	gamot sa sugat </p>
                  <p>●	balat at hairloss</p>
                  <p>●	diabetes</p>
                  <p>●	sakit sa atay at bato </p>
                  <p>●	infertility</p>
                  <p>●	cancer</p>
                  <p>Ginagamot ang antas ng cellular ng katawan!</p>
                  
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
          <h1>Para saan ang mahusay na gamot</h1>
      </Card.Text>
        
        </Card.Body>
        <Card.Img variant="bottom"  src={require('../Images/gympamore.jpg')} />
        <br></br>
        <Card.Text>
          <p>&#x2713; Ito ay para sa aktibong tao tulad ng mga atleta </p>
          <p>&#x2713; Tao may problema sa  pananakit ng katawan tulad ng sakit sa tuhod, likod, rayuma</p>
          <p>&#x2713; May mga edad.</p>
          </Card.Text>
      </Card>

      </Row>
      <br></br>
      <Row id="features">
        <Col sm={4}><Image src={require('../Images/bag.jpg')} thumbnail/></Col>
        <Col sm={8}>
          <Card className='m-3' style={{ width: '20rem' }}>
          <Card.Header><h3>Pag na kaka ranas ng:</h3>  </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>-sakit ng kalamnan</ListGroup.Item>
            <ListGroup.Item>-sakit ng kasukasuhan </ListGroup.Item>
            <ListGroup.Item>-pilay</ListGroup.Item>
            <ListGroup.Item>-sakit ng likod</ListGroup.Item>
            <ListGroup.Item>-paninigas at pulikat</ListGroup.Item>
          </ListGroup>
        </Card>
         
    
        <p>Itong spray ay makakatulong na matangal ang sakit ng mabilis.</p>
        <p>Dahil sa sangkap na taglay ng black seed ito ay nag bibigay ng therapeutic at propilactic effect.</p>
        <p>Ito ay mabisa unang pan lunas sakit ng katawan at kasukasuhan, mayroon syang taglay na malamig na pakiramdam. </p>
        <p>Magandang dalhin habang nag ehersisyo!</p>
    </Col>
      </Row>
      <br></br>

      <Row>
        <Col><h3>JointEase Pain Relief Spray kilala sa US, Europe at Singapore.</h3>
        <br></br>
        <CardGroup>
      <Card>
        <Card.Img variant="top" src={require('../Images/singapore.jpg')} />
        <Card.Body>
          <Card.Text>
          Para ito sa mga may edad na na may sakit sa kasukasuan at  likod.   
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src={require('../Images/grandma.jpg')} />
        <Card.Body>
          
          <Card.Text>
          Ang iyong lola ay masisiyahan sa matagal na epekto hangang 40 minuto ng menthol, black pepper at essential oil para sa kanyang sakit sa tuhod. Magandang ilagay sa batok bago matulog at itoy mag bibigay ng kaginhawaan sa katawan.
{' '} 
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
      <Card>
        <Card.Img variant="top" src={require('../Images/tao.jpg')} />
        <Card.Body>
        <Card.Text>
        HINDI DAPAT BALI WALAIN ANG SAKIT NG KATAWAN!{' '}
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer> */}
      </Card>
    </CardGroup>
    </Col>
      </Row>
      <br></br>

      <Row >
        <Col>
        <h5>Pag nakaramdam ng sakit ng katawan dapat huwag baliwalain at bigyan ng agarang lunas. Responsibilidad mo ang iyong katawan kayat dapat mong alagaan!</h5>
        <br></br>
        <p>&#x2713; Agarang lunas</p>
        <p>&#x2713; Pag iwas sa sakit ng kasukasuan at iba pang sakit sa buto.</p>
        <p>&#x2713; Panglunas ng joints at mga sakit sa buto.</p>
        <p>&#x2713; Pagpapabata ng tissue ng katawan</p>
        <br></br>
        <h5>Ang Spray na ito ay hindi delikado sa para sa pamilya, pwedeng gamitin ng mga bata!</h5>
        <h5> May diskwento na 5% para sa mga senior citizens!</h5>
        <br></br>
      
        
        </Col>
        <br></br>
      </Row>
    
      
    </Container>
      </>

      );
    }
 
  export default Filipino;