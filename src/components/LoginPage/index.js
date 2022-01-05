import { Container, Form, Input, Button } from "./styles";
import logo from "../../assets/logo.png";

import { useNavigate } from "react-router";

function LoginPage () {
    const navigate = useNavigate();

    return (
        <Container>
            <img src={logo} alt={"logo"}/>
            <Form>
                <Input placeholder="email"/>
                <Input placeholder="senha"/>
                <Button onClick={() => navigate("/habitos")}>Entrar</Button>
            </Form>
            <span onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se!</span>
        </Container>
    )
}

export default LoginPage;