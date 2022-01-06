import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HabitsPage from "./components/HabitsPage";
import HistoryPage from "./components/HistoryPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SingUpPage";
import TodayPage from "./components/TodayPage";
import UserContext from "./context/UserContext";


function App () {
    const [userData, setUserData] = useState({});

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ userData, setUserData }}>
                <Routes>
                    <Route path="/" element={<LoginPage/>}/>
                    <Route path="/cadastro" element={<SignUpPage/>}/>
                    <Route path="/habitos" element={<HabitsPage/>}/>
                    <Route path="/hoje" element={<TodayPage/>}/>
                    <Route path="/historico" element={<HistoryPage/>}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default App;