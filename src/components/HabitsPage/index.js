import axios from "axios";
import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";

import Menu from "../Menu";
import Top from "../Top";
import { Container } from "./style";

function HabitsPage () {
    const { userData } = useContext(UserContext);

    useEffect(() => {
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        });

        promisse.then((response) => console.log(response));
        promisse.catch((error) => console.log(error.response));
    },[])

    return (
        <Container>
            <Top/>
            <h1>habitos</h1>
            <Menu/>
        </Container>
    )
}

export default HabitsPage;