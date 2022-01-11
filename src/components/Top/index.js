import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Header } from "./style";

import miniLogo from "../../assets/miniLogo.png";
import { useNavigate } from "react-router-dom";

function Top () {
    const { userData } = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <Header>
            <img src={miniLogo} alt="top-logo" onClick={() => navigate("/")}></img>
            <img src={userData.image}alt="foto de perfil"></img>
        </Header>
    )
}

export default Top;