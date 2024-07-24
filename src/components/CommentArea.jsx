import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState ([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  useEffect (() => {
    const getComments = async () => {
        setIsLoading(true)
        try {
            let res = await fetch (
                'https://striveschool-api.herokuapp.com/api/comments/' + asin,
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEwZDRmZDlkNGJlMDAwMTU5YTJmOTkiLCJpYXQiOjE3MjE4MTYzMTcsImV4cCI6MTcyMzAyNTkxN30.PmDrDX1VN13MOD3ZybL8q5TekOZ4SsaCcetOcUldKlQ'
                    },
                }
            )
            if (res.ok) {
                let comments = await response.json()
                setComments(comments)
                 setIsLoading(false)
            setIsError(false)
            } else {
                setIsLoading(false)
                setIsError(true)
                console.log(isError)
            }
        } catch (isError) {
            setIsLoading(false)
            setIsError(true)
        }
    } if (asin) {
        getComments()
    } 
  }, [asin])

return (
    <div className="text-left">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={asin} />
        <CommentList showComments={comments} />
    </div>
)}

export default CommentArea;