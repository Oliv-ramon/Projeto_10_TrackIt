import { BrowserRouter, Routes, Route } from "react-router-dom";

import HabitsPage from "./components/HabitsPage";
import HistoryPage from "./components/HistoryPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SingUpPage";
import TodayPage from "./components/TodayPage";


function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/cadastro" element={<SignUpPage/>}/>
                <Route path="/habitos" element={<HabitsPage/>}/>
                <Route path="/hoje" element={<TodayPage/>}/>
                <Route path="/historico" element={<HistoryPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;