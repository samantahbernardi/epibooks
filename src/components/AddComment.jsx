import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = ({ asin }) => {
    const [comment, setComment] = useState({
        comment: '',
        rate: 1,
        elementId: null,
    })


useEffect(() => {
setComment((comm)) => ({
    ...comm,
    elementId: asin,
  }))
}, [asin])

const sendComment = async (err) => {
    err.preventDefault()
    try {
        let res = await fetch(
            'https://striveschool-api.herokuapp.com/api/comments',
            {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
            'content.type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEwZDRmZDlkNGJlMDAwMTU5YTJmOTkiLCJpYXQiOjE3MjE4MTYzMTcsImV4cCI6MTcyMzAyNTkxN30.PmDrDX1VN13MOD3ZybL8q5TekOZ4SsaCcetOcUldKlQ',
                },

            }
        )
        if (res.ok) {
            alert('la tua recensione è stata inviata')
            setComment ({
                comment: '',
                rate: 1,
                elementId: null,
            })
        } else {
            throw new Error('qualcosa è andato storto. Riprova!')
        } 

        catch (err) 
        alert(err) 
    }
}


return (
    <div className="my-2">
        <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>La tua recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi qui"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valuta</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
          </Button>
        </Form>
    </div>)

export default AddComment;