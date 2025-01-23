import { Button, Card, Image, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {
    return (
        <div className='div-body bg-light pt-2 text-secondary border border-secondary border-5  align-items-center' >
            <h2>Home</h2> 
            <Container style={{ maxWidth: '18rem', height:'auto' }} fluid>
                <Image  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png" className="rounded mb-1" fluid ></Image>
            </Container>
            <Card style={{ width: '18rem'}} className='mx-auto' >
            <Card.Body>
                <Card.Title style={{overflow:'hidden'}}>Comic Library!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Use Our Amazing Features</Card.Subtitle>
                <Card.Text>
                Welcome to the comics website. Learn all about the different superheros in the Marvel Universe. Learn, Browse, and Enjoy!
                </Card.Text>
                <Card.Link href="#">Subscription</Card.Link>
                <Card.Link href="#">Email</Card.Link>
            </Card.Body>
            </Card>
          
            
            <Button variant='primary' className='shadow mt-3'>Shop Now</Button>
        </div>
    );
};

export default Home;