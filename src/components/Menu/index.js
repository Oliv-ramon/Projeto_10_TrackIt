import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { CircularButton, Footer } from "./style";

function Menu () {
    const navigate  = useNavigate();
    const { progress } = useContext(UserContext);
    return (
        <Footer>
            <button onClick={() => navigate("/habitos")}>Hábitos</button>
            <button className="today" onClick={() => navigate("/hoje")}>
                <CircularButton 
                    value={progress} 
                    background={true}
                    backgroundPadding={6}
                    strokeWidth={9}
                    text={"Hoje"}
                />
            </button>
            <button onClick={() => navigate("/historico")}>Histórico</button>
        </Footer>
    )
}

export default Menu;