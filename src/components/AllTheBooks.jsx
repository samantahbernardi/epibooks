import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fantasy from '../books-2/fantasy.json'

function AllTheBooks() {
    return (
        <Row className="g-3">
            {fantasy.map((libro) => {
                return (
                    <Col xs={12} md={3} key={libro.asin}>
                        <Card className="book-cover d-flex flex-column">
                            <Card.Img variant="top" src={libro.img} />
                            <Card.Body>
                                <Card.Title>{libro.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>)
            })
            };
        </Row>)
}

export default AllTheBooks;