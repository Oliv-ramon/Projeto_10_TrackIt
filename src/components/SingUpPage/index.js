import { Container, Form, Input, Button } from "./styles";
import logo from "../../assets/logo.png";

import { useNavigate } from "react-router";


function SignUpPage () {
    const navigate = useNavigate();

    return (
            <Container>
                <img src={logo} alt={"logo"}/>
                <Form>
                    <Input placeholder="email"/>
                    <Input placeholder="senha"/>
                    <Input placeholder="nome"/>
                    <Input placeholder="foto"/>
                    <Button>Cadastrar</Button>
                </Form>
                <span onClick={() => navigate("/")}>Já tem uma conta? Faça login!</span>
            </Container>
    )
}

export default SignUpPage;