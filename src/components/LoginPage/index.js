import { Container, Form, Input, Button } from "./styles";
import logo from "../../assets/logo.png";

import { useNavigate } from "react-router";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import UserContext from "../../context/UserContext";


function LoginPage () {
    const navigate = useNavigate();
    const { setUserData } = useContext(UserContext);
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const localUserData = JSON.parse(localStorage.getItem("userData"));

        const result = window.confirm(`Continuar como ${localUserData.name}?`);

        if (localUserData && result) {
            setUserData(localUserData);
            navigate("/hoje");
        }
    },[])

    function handleLogin(e) {
        e.preventDefault();

        setLoading(true);

        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", formData);

        promisse.then(({data}) => {
            console.log(data);
            setUserData({ 
                name: data.name,
                image: data.image,
                token: data.token 
            });
            localStorage.setItem("userData", JSON.stringify({ 
                name: data.name,
                image: data.image,
                token: data.token 
            }));
            navigate("/hoje");
            setLoading(false);
        });
        promisse.catch(() => {
            alert("senha ou email inválidos");
            setLoading(false);
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
                <Button 
                    type="submit"
                    disabled={loading}
                    onClick={() => console.log(formData)
                }>
                    {loading ? <Loader type="ThreeDots" color="#FFF" height={70} width={70} timeout={10000}/> : "Entrar"}
                </Button>
            </Form>
            <span onClick={() => navigate("/cadastro")}>Não tem uma conta? Cadastre-se!</span>
        </Container>
    )
}

export default LoginPage;