import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import db from "./config";

function TinderCards() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const unsubscribe = db
      .collection("people")
      .onSnapshot(snapshot => setPeople(snapshot.docs.map(doc => doc.data())));

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard
            className="swipe"
            preventSwipe={["up", "down"]}
            key={person.name}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
