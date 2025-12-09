import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function CommentDetails({refresh}) {
  const navigate = useNavigate()
  const { gameId } = useParams()
  const [comments, setComments] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:3030/jsonstore/comments`)
        .then(res => res.json())
        .then(data => {
          
          console.log(data);
          
          const gameComments = Object.values(data).filter(c => c.gameId == gameId)
          console.log(gameComments);
          setComments(gameComments);
         })
        .catch(err => alert(err));
    }, [gameId,refresh])
  console.log(comments);
  
  return (
    <div className="details-comments">
      <h2>Comments:</h2>
      <ul>
        {comments.map((comment) => {
          return( <li key = {comment._id} className="comment">
          <p>
            {comment.author}:{comment.comment}
          </p>
        </li>)
         
          
        })}
        
       
      </ul>
     {comments.length == 0 && <p className="no-comment">No comments.</p>}
    
    </div>
  );
}
