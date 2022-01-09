import { useState } from "react";
import axios from "axios";
import { useContext } from "react/cjs/react.development";
import UserContext from "../../context/UserContext";

import { HabitContainer } from "./styles";
import grayButton from "../../assets/grayButton.png";
import greenButton from "../../assets/greenButton.png";

function Habit({id, name, done, currentSequence, highestSequence, setReloadHabits}) {
  const { userData } = useContext(UserContext);
  const [checked, setChecked] = useState(done);

  function ckechHabit() {
    if (checked) {
      checsksRequest("uncheck");
      setChecked(false);
    } else {
      checsksRequest("check");
      setChecked(true);
    }
  }

  function checsksRequest(action) {
    const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${action}`, {},{
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    });
    
    promisse.then((response) => {
      setReloadHabits([]);
      console.log(response)
    })
    promisse.catch((error) => console.log(error.response))
  }

  return (
    <HabitContainer current_equal_highest={currentSequence === highestSequence} checked={checked}>
      <h1>{name}</h1>
      <p>Sequência atual: <span>{currentSequence} dias</span><br/>Seu recorde: <span>{highestSequence} dias</span></p>
      <img src={checked ? greenButton : grayButton} alt="check-button" onClick={(e) => ckechHabit(e)}/>
    </HabitContainer>
  )
}

export default Habit;