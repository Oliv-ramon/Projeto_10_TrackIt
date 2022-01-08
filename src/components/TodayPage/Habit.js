import { useState } from "react";

import { HabitContainer } from "./styles";
import grayButton from "../../assets/grayButton.png";
import greenButton from "../../assets/greenButton.png";

function Habit({name, currentSequence, highestSequence}) {
  const [src, setSrc] = useState(grayButton);

  return (
    <HabitContainer>
      <h1>{name}</h1>
      <span>Sequência atual: {currentSequence} dias<br/>Seu recorde: {highestSequence} dias</span>
      <img src={src} alt="check-button"/>
    </HabitContainer>
  )
}

export default Habit;