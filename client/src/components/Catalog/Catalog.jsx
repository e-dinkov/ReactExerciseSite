import { useEffect, useState } from "react";
import Game from "../Game/Game";

export default function Catalog() {
    const [games, setGames] = useState([]);
    useEffect(() => {
        (async () => {
            try {
               const response = await fetch('http://localhost:3030/jsonstore/games');
            const data = await response.json();
            console.log(data);
            setGames(Object.values(data)); 
            } catch (error) {
                alert(error.message);
            }
            
        })()
    }, []);
    return (
      <section id="catalog-page">
        <h1>Catalog</h1>
        {/* Display div: with information about every game (if any) */}
            <div className="catalog-container">
                {games.length === 0 && <h3 className="no-articles">No Added Games Yet</h3>}
        {games.map((game)=><Game key={game._id} {...game}/>) }
        </div>
        {/* Display paragraph: If there is no games  */}
        {/* <h3 class="no-articles">No Added Games Yet</h3> */}
      </section>
    );
}