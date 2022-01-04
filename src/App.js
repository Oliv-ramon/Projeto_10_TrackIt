import { BrowserRouter, Routes, Route } from "react-router-dom";


function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>boa</h1>}/>
                {/* <Route path="/cadastro" element={}/>
                <Route path="/habitos" element={}/>
                <Route path="/hoje" element={}/>
                <Route path="/historico" element={}/> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App