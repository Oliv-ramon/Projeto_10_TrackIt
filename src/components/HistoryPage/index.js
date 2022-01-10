import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react/cjs/react.development";
import UserContext from "../../context/UserContext";

import Menu from "../Menu";
import Top from "../Top";
import { Container, StyledCalendar } from "./style";

function HistoryPage () {
    const [value, setValue] = useState(new Date());
    const { userData } = useContext(UserContext);
    const [habitsPerDate, setHabitsPerDate] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily", {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        });

        promisse.then((response) => {
            console.log(response.data)
            setHabitsPerDate(response.data)
        });
        promisse.catch(() => navigate("/"))
    },[]);

    function setTileClass({ date }) {
        const dateList = habitsPerDate.map((h) => h.day);

        const dayFromLib = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`;

        const monthFromLib = date.getMonth()+1 > 10 ? date.getMonth()+1 : `0${date.getMonth()+1}`;

        const dateFromLib = `${dayFromLib}/${monthFromLib}/${date.getFullYear()}`;

        // console.log(habitsPerDate.find((h) => h.day === dateFromLib), habitsPerDate.find((h) => h.day === dateFromLib).habits.map((h) => h.done))

        if (dateList.includes(dateFromLib)) {
            const doneList = habitsPerDate.find((h) => h.day === dateFromLib).habits.map((h) => h.done);

            console.log(habitsPerDate.find((h) => h.day === dateFromLib))

            if (doneList.every((done) => done === true)) {
                return "green"
            } else {
                return "red"
            }
        } else {
            return ""
        }
    }
    
    function onChange(nextValue) {
    setValue(nextValue);
    }

    return (
        <>
            <Top/>
            <Container>
                <h1>Histórico</h1>
                <StyledCalendar
                    onChange={onChange}
                    value={value}
                    calendarType="US"
                    locale="pt-BR"
                    tileClassName={setTileClass}
                />
            </Container>
            <Menu/>
        </>
    )
}

export default HistoryPage;