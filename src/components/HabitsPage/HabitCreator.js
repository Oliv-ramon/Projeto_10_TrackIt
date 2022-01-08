import axios from "axios";
import { useContext, useState } from "react";
import HabitsContext from "../../context/HabitsContext";
import UserContext from "../../context/UserContext";

import { CreatorContainer, Options, WeekDaysButtons } from "./style";

function HabitCreator() {
  const { userData } = useContext(UserContext);
  const { setReloadHabits, setCreatingHabit, habitsData, setHabitsData, weekDays } = useContext(HabitsContext);
  const [loading, setLoading] = useState(false);

  function handleHabitCreation({target}) {
    const daysElements = [...target.parentElement.previousSibling.children];

    setLoading(true);

    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habitsData, {
      headers: {
        Authorization: `Bearer ${userData.token}`
      }
    });

    promisse.then((response) => {
      console.log(response);
      setLoading(false);
      setHabitsData({ name: "", days: [] });
      setReloadHabits([]);
      daysElements.forEach(li => li.classList.remove("selected"));
      setCreatingHabit(false);
    });
    promisse.catch((error) => {
      console.log(error.response);
      setLoading(false);
      alert("Você precisa dar um nome ao hábito");
    });

  }

  function selectDay(e) {
    const noSelected = !e.target.classList.contains("selected");

    if (noSelected) {
      setHabitsData({ ...habitsData, days: [...habitsData.days, e.target.id] });

      e.target.classList.add("selected");
    } else {
      setHabitsData({ ...habitsData, days: habitsData.days.filter((day) => day !== e.target.id) });

      e.target.classList.remove("selected");
    }
  }

  return (
    <CreatorContainer>
      <input 
        placeholder="nome do hábito" 
        disabled={loading}
        value={habitsData.name} 
        onChange={(e) => setHabitsData({ ...habitsData, name: e.target.value })}
        />
      <WeekDaysButtons>
        {weekDays.map(({ day, id }) => (
          <li 
            key={id} 
            id={id}
            disabled={loading}
            className={habitsData.days.includes(id) ? "selected"  : ""}
            onClick={(e) => selectDay(e)}
          >
            {day}
          </li>
        ))}
      </WeekDaysButtons>
      <Options>
        <button 
          disabled={loading} 
          onClick={() => {
            setCreatingHabit(false)
            console.log(habitsData)
          }}
        >
          Cancelar
        </button>
        <button disabled={loading} onClick={handleHabitCreation}>Salvar</button>
      </Options>
    </CreatorContainer>
  )
}

export default HabitCreator;