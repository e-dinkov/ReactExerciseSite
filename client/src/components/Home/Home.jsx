import {  useEffect, useState } from "react";
import Game from "../Game/Game";

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/games')
      .then(res => res.json())
      .then(data => {
        const resultGames = Object.values(data);
        const newGames = resultGames.sort((a, b) => b._createdOn - a._createdOn).slice(0, 3);
        setGames(newGames);
      });
  }, []);
    return (
      <section id="welcome-world">
        <div className="welcome-message">
          <h2>ALL new games are</h2>
          <h3>Only in </h3>
          <img id="logo-left" src="./images/logo.png" alt="logo" />
        </div>
        <div id="home-page">
          <h1>Latest Games</h1>
          <div id="latest-wrap">
            {/* Display div: with information about every game (if any) */}
            <div className="home-container">
          {games.length === 0 && <h3 className="no-articles">No Added Games Yet</h3>}
                  {games.map((game)=><Game key={game._id} {...game}/>) }
            </div>
          </div>
        </div>
      </section>
    );
}