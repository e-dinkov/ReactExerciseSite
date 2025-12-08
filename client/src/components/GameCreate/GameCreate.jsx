import { useNavigate } from "react-router";

export default function GameCreate() {
  const navigate = useNavigate();
    const createGameHandler = () => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('title');
        const genre = formData.get('genre');
        const players = formData.get('players');
        const date = formData.get('date');
        const summary = formData.get('summary');
        const imageUrl = formData.get('imageUrl');
        const _createdOn = Date.now();
        const game = { title, genre, players, date, summary, imageUrl, _createdOn };
        fetch("http://localhost:3030/jsonstore/games", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(game),
        }).then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => alert(err))
          .then(() => navigate("/games"));

    }
    return (
      <section id="add-page">
            <form id="add-new-game" onSubmit={createGameHandler }>
          <div className="container">
            <h1>Add New Game</h1>
            <div className="form-group-half">
              <label htmlFor="gameName">Game Name:</label>
              <input
                type="text"
                id="gameName"
                name="title"
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
              />
            </div>
            <div className="form-group-half">
              <label htmlFor="releaseDate">Release Date:</label>
              <input type="date" id="releaseDate" name="date" />
            </div>
            <div className="form-group-full">
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                placeholder="Enter image URL..."
              />
            </div>
            <div className="form-group-full">
              <label htmlFor="summary">Summary:</label>
              <textarea
                name="summary"
                id="summary"
                rows={5}
                placeholder="Write a brief summary..."
                defaultValue={""}
              />
            </div>
            <input
              className="btn submit"
              type="submit"
              defaultValue="ADD GAME"
            />
          </div>
        </form>
      </section>
    );
}