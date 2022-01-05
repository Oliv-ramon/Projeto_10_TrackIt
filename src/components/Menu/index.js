import { useNavigate } from "react-router";
import { Footer } from "./style";

function Menu () {
    const navigate  = useNavigate()
    return (
        <Footer>
            <button onClick={() => navigate("/habitos")}>Hábitos</button>
            <button onClick={() => navigate("/hoje")}>Hoje</button>
            <button onClick={() => navigate("/historico")}>Histórico</button>
        </Footer>
    )
}

export default Menu;