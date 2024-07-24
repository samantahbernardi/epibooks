import { Button, ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEwZDRmZDlkNGJlMDAwMTU5YTJmOTkiLCJpYXQiOjE3MjE4MTYzMTcsImV4cCI6MTcyMzAyNTkxN30.PmDrDX1VN13MOD3ZybL8q5TekOZ4SsaCcetOcUldKlQ',
          },
        }
      )
      if (response.ok) {
        alert('La tua recensione è stata eliminata')
      } else {
        throw new Error('Purtroppo la tua recensione non è stata eliminata. Riprova più tardi')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <ListGroup.Item data-testid="single-comment">
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina commento
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
