import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Header } from "./style";

import miniLogo from "../../assets/miniLogo.png";

function Top () {
    const { userData } = useContext(UserContext);

    return (
        <Header>
            <img src={miniLogo} alt="top-logo"></img>
            <img src={userData.image}alt="foto de perfil"></img>
        </Header>
    )
}

export default Top;