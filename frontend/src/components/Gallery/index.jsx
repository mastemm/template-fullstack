import axios from "axios";
import { useState, useEffect } from "react";
import SGallery from "./style";

function Gallery() {
  const [cards, setCards] = useState([]);

  const getCards = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151")
      .then(({ data }) => {
        setCards(data.results);
      });
  };

  useEffect(getCards, []);

  return (
    <SGallery>
      <button type="button" onClick={getCards}>
        TOTO!!
      </button>
      {cards.map((card) => {
        return <p>{card.name}</p>;
      })}
    </SGallery>
  );
}

export default Gallery;
