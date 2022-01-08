import axios from "axios";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import UserContext from "../../context/UserContext";

import Menu from "../Menu";
import Top from "../Top";
import Habit from "./Habit";
import { Container, Header } from "./styles";

function TodayPage() {
    const { userData } = useContext(UserContext);
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        });

        promisse.then((response) => {
            console.log(response)
            setHabits(response.data);
        });
    },[]);

    function dateReader() {
        const date = dayjs();

        const weekDays = [
            {day: "Domingo", id: "0"}, 
            {day: "Segunda", id: "1"}, 
            {day: "Terça", id: "2"}, 
            {day: "Quarta", id: "3"}, 
            {day: "Quinta", id: "4"}, 
            {day: "Sexta", id: "5"},
            {day: "Sábado", id: "6"}
          ]; 

        const weekDay = weekDays.find(({id}) => id == date.$W).day;
        
        const day =  date.$D < 10 ? `0${date.$D}` : date.$D;

        const month = date.$M+1 < 10 ? `0${date.$M+1}` : date.$M+1;

        return `${weekDay}, ${day}/${month}`;
    }

    !habits && <h1>carregando</h1>; 

    return (
        <>
            <Top/>
            <Container>
                <Header>
                    <h1>{dateReader()}</h1>
                    <span>Nenhum hábito concluído ainda</span>
                </Header>
                <ul>
                    {habits.map((habit) => (
                        <Habit key={habit.id} {...habit}/>
                    ))}
                </ul>
                
            </Container>
            <Menu/>
        </>
    )
}

export default TodayPage;