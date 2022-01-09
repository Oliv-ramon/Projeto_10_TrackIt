import axios from "axios";
import { useContext, useEffect, useState } from "react";
import HabitsContext from "../../context/HabitsContext";
import UserContext from "../../context/UserContext";

import Menu from "../Menu";
import Top from "../Top";
import HabitCreator from "./HabitCreator";
import { Container, Habit, Habits, WeekDaysButtons } from "./style";
import trashIcon from "../../assets/trashIcon.png"
import { useNavigate } from "react-router";

function HabitsPage () {
    const { userData, setUserData } = useContext(UserContext);
    const [creatingHabit, setCreatingHabit]  = useState(false);
    const [reloadHabits, setReloadHabits] = useState([]);
    const  [habitsData, setHabitsData] = useState({
        name: "",
        days: []
    });
    const navigate = useNavigate();

    const weekDays = [
        {day: "D", id: "0"}, 
        {day: "S", id: "1"}, 
        {day: "T", id: "2"}, 
        {day: "Q", id: "3"}, 
        {day: "Q", id: "4"}, 
        {day: "S", id: "5"},
        {day: "S", id: "6"}
      ];    

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        });

        promisse.then((response) => {
            console.log(response);
            setUserData({ ...userData, habits: response.data })
        });
        promisse.catch(() => navigate("/"));
    },[reloadHabits]);

    function toggleCreatingState() {
        console.log(creatingHabit)
        if (creatingHabit) {
            setCreatingHabit(false);
        } else {
            setCreatingHabit(true);
        }
    }

    function handleDelete(habitId) {
        const result = window.confirm("Tem certeza que quer excluir o hábito?");

        if (result) {
            const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`, {
                headers: {
                    Authorization: `Bearer ${userData.token}`
                  }
            });

            promisse.then(() => setReloadHabits([]))
        }
    }

    if (!userData.habits) {
        return "carregando";
    }

    return (
        <Container>
            <Top/>
            <HabitsContext.Provider value={{ setReloadHabits, setCreatingHabit, habitsData, setHabitsData, weekDays }}>
                <Habits>
                    <header>
                        Meus Hábitos
                        <button onClick={toggleCreatingState}>+</button>
                    </header>
                    {creatingHabit && <HabitCreator/>}
                    {userData.habits.length === 0 ? "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!" : userData.habits.map((habit) => (
                        <Habit>
                            <img src={trashIcon} alt="deletar hábito" onClick={() => handleDelete(habit.id)}/>
                            <span>{habit.name}</span>
                            <WeekDaysButtons>
                            {weekDays.map(({ day, id }) => (
                                <li 
                                    key={id} 
                                    id={id}
                                    className={habit.days.includes(Number(id)) ? "selected"  : ""}
                                >
                                    {day}
                                </li>
                            ))}
                            </WeekDaysButtons>
                        </Habit>
                    ))}

                </Habits>
            </HabitsContext.Provider>
            <Menu/>
        </Container>
    )
}

export default HabitsPage;