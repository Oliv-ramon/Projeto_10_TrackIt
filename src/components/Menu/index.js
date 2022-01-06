import { useNavigate } from "react-router";
import { CircularButton, Footer } from "./style";

function Menu () {
    const navigate  = useNavigate()
    return (
        <Footer>
            <button onClick={() => navigate("/habitos")}>Hábitos</button>
            <button className="today" onClick={() => navigate("/hoje")}>
                <CircularButton 
                    value={50} 
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