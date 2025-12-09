import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function Edit() {
    const { gameId } = useParams();
    const navigate = useNavigate();
    const initialValues = {
        title: "",
        genre: "",
        players: 0,
        date: "",
        imageUrl: "",
        summary: "",
    }
    const [values, setValues] = useState(initialValues);
    const changeHandler = (e) => {
    
        setValues(state=> ({ ...state, [e.target.name]: e.target.value }));
    }
    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/games/${gameId}`)
            .then(res => res.json())
            .then(data => setValues(data))
            .catch(err => alert(err));
    }, [gameId])
    const editHandler = async(formData) => {
        try{const gameData = { ...values};
        const response = await fetch(`http://localhost:3030/jsonstore/games/${gameId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(gameData),
        });
        const data = await response.json();
        console.log(data);
            navigate(`/games/${gameId}/details`);
        }
        catch (error) {
            alert(error.message);
        }
    }
  return (
    <section id="edit-page">
      <form id="add-new-game" action={editHandler}>
        <div className="container">
          <h1>Edit Game</h1>
          <div className="form-group-half">
            <label htmlFor="gameName">Game Name:</label>
            <input
              type="text"
              id="gameName"
              name="title"
              onChange={changeHandler}
              value={values.title}
              placeholder="Enter game title..."
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="genre">Genre:</label>
            <input
              type="text"
              id="genre"
              name="genre"
              placeholder="Enter game genre..."
              onChange={changeHandler}
              value={values.genre}
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="activePlayers">Active Players:</label>
            <input
              type="number"
              id="activePlayers"
              name="players"
              min={0}
              placeholder={0}
              onChange={changeHandler}
              value={values.players}
            />
          </div>
          <div className="form-group-half">
            <label htmlFor="releaseDate">Release Date:</label>
                      <input type="date" id="releaseDate" name="date"
                          onChange={changeHandler}
            value={values.date} />
           
          </div>
          <div className="form-group-full">
            <label htmlFor="imageUrl">Image URL:</label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              placeholder="Enter image URL..."
              onChange={changeHandler}
              value={values.imageUrl}
            />
          </div>
          <div className="form-group-full">
            <label htmlFor="summary">Summary:</label>
            <textarea
              name="summary"
              id="summary"
              rows={5}
              placeholder="Write a brief summary..."
                          
                          onChange={changeHandler}
                          value={values.summary}
            />
          </div>
          <input
            className="btn submit"
            type="submit"
            defaultValue="EDIT GAME"
          />
        </div>
      </form>
    </section>
  );
}
