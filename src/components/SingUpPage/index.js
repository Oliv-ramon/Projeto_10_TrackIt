import { Container, Form, Input, Button } from "./styles";
import logo from "../../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";


function SignUpPage () {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    });
    const [loading, setLoading] = useState(false)

    function handleSignUp(e) {
        e.preventDefault();

        setLoading(true);

        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", formData);

        promisse.then(() => {
            setLoading(false);
        });
        promisse.catch(() => {
            alert("dados inválidos");
            setLoading(false);
        });
    }

    return (
        <Container>
            <img src={logo} alt={"logo"}/>
            <Form onSubmit={(e) => handleSignUp(e)}>
                <Input 
                    type="email"
                    placeholder="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={loading}
                    required
                />
                <Input 
                    type="password"
                    placeholder="senha"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    disabled={loading}
                    required
                />
                <Input
                    type="text"
                    placeholder="nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={loading}
                    required
                />
                <Input
                    type="text"
                    placeholder="foto"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    disabled={loading}
                    required
                />
                <Button
                    type="submit"
                    disabled={loading}
                    onClick={() => console.log(formData)
                }>
                    {loading ? <Loader type="ThreeDots" color="#FFF" height={70} width={70} timeout={10000}/> : "Cadastrar"}
                </Button>
            </Form>
            <span onClick={() => navigate("/")}>Já tem uma conta? Faça login!</span>
        </Container>
    )
}

export default SignUpPage;