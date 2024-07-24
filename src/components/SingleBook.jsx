import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleBook = ({ setSelected, selected, libro }) => {
  const navigate = useNavigate()

  return (
    <>
      <Card
        onClick={() => setSelected(libro.asin)}
        style={{
          border: selected === libro.asin ? '3px solid red' : 'none',
        }}
        data-testid="libro-card"
      >
        <Card.Img variant="top" src={libro.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{libro.title}</Card.Title>
          <Button
            className="w-100 mt-2"
            onClick={() => navigate(`/details/${libro.asin}`)}
          >
            DETTAGLI
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook;