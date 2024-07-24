import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import fantasy from '../data/fantasy.json'
import CommentArea from './CommentArea'

const BookDetails = () => {
  const params = useParams()
  const trovaLibro = fantasy.find((libro) => libro.asin === params.asin)

  return (
    <Row className="justify-content-center">
      <Col md={8}>
        <Card>
          <Card.Img variant="top" src={trovaLibro.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {trovaLibro.title}
            </Card.Title>
          </Card.Body>
        </Card>
        <CommentArea asin={params.asin} />
      </Col>
    </Row>
  )
}

export default BookDetails;