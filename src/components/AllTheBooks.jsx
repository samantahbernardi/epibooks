import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import fantasy from '../books-2/fantasy.json'
import SingleBook from './SingleBook'
import useState from 'react'

/*function AllTheBooks() {
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
}*/



const AllTheBooks = ({ searchQuery }) => {
    const [selected, setSelected] = useState(false)

    return (
        <Row>
        <Col md={8}>
          <Row className="g-2 mt-3">
            {fantasy
              .filter((l) => l.title.toLowerCase().includes(searchQuery))
              .map((libro) => {
                return (
                  <Col xs={12} md={4} key={libro.asin}>
                    <SingleBook
                      libro={libro}
                      selected={selected}
                      setSelected={setSelected}
                    />
                  </Col>
                )
              })}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea asin={selected} />
        </Col>
      </Row>
    ) }
    
    export default AllTheBooks;