import { useState } from "react";
import { Card } from "./Card.jsx";
import cards1 from "../data.json";
import "./Set.css";

import { useLocation } from "react-router-dom";

export function Set() {

  const location = useLocation()
  const { set } = location.state;

   const cards = cards1.filter((item) => (item.setName === set));

  const [step, setStep] = useState(0);

  const nextCard = () => setStep((step + 1) % cards.length);
  const prevCard = () => setStep((step - 1 + cards.length) % cards.length);

  return (
    <div className="set-container">
      <h2>название набора</h2>
      <Card front={cards[step].front} back={cards[step].back} key={cards[step].id} />
      <div className="controls">
        <button onClick={prevCard}>ᐸ</button>{step + 1}/{cards.length}{" "}<button onClick={nextCard}>ᐳ</button>
      </div>
    </div>
  );
}