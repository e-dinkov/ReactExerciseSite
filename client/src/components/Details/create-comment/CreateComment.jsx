import { useState } from "react";
import { useParams } from "react-router";

export default function CreateComment({user}) {
    const [comment, setComment] = useState('');
    const {gameId} = useParams();
    const changeHandler = (e) => {
        setComment(e.target.value);
        console.log(user);
        
    }
    const submitHandler = async() => {
        const commentData = {comment,author: user.email, gameId};
       try {
        await fetch('http://localhost:3030/jsonstore/games/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentData)
        })
       } catch (error) {
           alert(error.message);
        
       } 
        console.log(commentData);
        
        setComment('');
    }
    return (
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" action={submitHandler}>
          <textarea
            name="comment"
            placeholder="Comment......"
            onChange={changeHandler}
            disabled={user === null}
          />
          <input
            disabled={user === null}
            className="btn submit"
            type="submit"
            defaultValue="Add Comment"
          />
        </form>
      </article>
    );
}