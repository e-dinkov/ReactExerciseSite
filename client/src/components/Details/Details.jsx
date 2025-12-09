import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import CreateComment from "./create-comment/CreateComment";
import CommentDetails from "./comment-details/CommentDetails";

export default function Details({user}) {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({});
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/games/${gameId}`)
            .then(res => res.json())
            .then(data => setGame(data))
            .catch(err => alert(err));
    }, []);
    function deleteGameHandler() {
        const isConfirmed = confirm('Are you sure you want to delete this game?');
        if (!isConfirmed) {
            return
        }
        fetch(`http://localhost:3030/jsonstore/games/${gameId}`, {
            method: 'DELETE'
        })
            .catch(err => alert(err))
            .then(() => navigate('/games'));
        
     
 }
    return (
      <section id="game-details">
        <h1>{game.title}</h1>
        <div className="info-section">
          <div className="header-and-image">
            <img
              className="game-img"
              src={game.imageUrl}
              alt="Elden Ring Cover Art"
            />
            <div className="meta-info">
              <h1 className="game-name">{game.title}</h1>
              <p className="data-row">
                <span className="label">Genre:</span>
                <span className="value">{game.genre}</span>
              </p>
              <p className="data-row">
                <span className="label">Active Players:</span>
                <span className="value">{game.players}</span>
              </p>
              <p className="data-row">
                <span className="label">Release Date:</span>
                <span className="value">{game.date}</span>
              </p>
            </div>
            <div className="summary-section">
              <h2>Summary:</h2>
              <p className="text-summary">
                {game.summary}
              </p>
            </div>
          </div>
          {/* Edit/Delete buttons ( Only for creator of this game )  */}
          <div className="buttons">
            <Link to={`/games/${gameId}/edit`} className="button">
              Edit
            </Link>
            <button onClick={deleteGameHandler} className="button">
              Delete
            </button>
          </div>
          <CommentDetails />
        </div>
        {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
        <CreateComment user={user} />
      </section>
    );
}