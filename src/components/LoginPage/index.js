import { Container, Form, Input, Button } from "./styles";
import logo from "../../assets/logo.png";

import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import Loader from "react-loader-spinner";


function LoginPage () {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        loading: false
    });

    function handleLogin(e) {
        e.preventDefault();

        setFormData({ ...formData, loading: true });

        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", formData);

        promisse.then(() => {
            navigate("/hoje")
            setFormData({ ...formData, loading: false });
        });
        promisse.catch(() => {
            alert("senha ou email inválidos");
            setFormData({ ...formData, loading: false });
        });
    }

    return (
        <Container>
            <img src={logo} alt={"logo"}/>
            <Form onSubmit={(e) => handleLogin(e)}>
                <Input 
                    type="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={formData.loading}
                    required
                />
                <Input 
                    type="password"
                    placeholder="senha"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    disabled={formData.loading}
                    required
                />
                <Button 
                    type="submit"
                    disabled={formData.loading}
                    onClick={() => console.log(formData)
                }>
                    {formData.loading ? <Loader type="ThreeDots" color="#FFF" height={70} width={70} timeout={3000}/> : "Entrar"}
                </Button>
            </Form>
            <span onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se!</span>
        </Container>
    )
}

export default LoginPage;