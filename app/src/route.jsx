import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import NotFound from "./pages/NotFound";
import Base from "./pages/Base";

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Base/> }>
                    <Route index            element={<Home/>}    ></Route>
                    <Route path="/sobre"    element={<Sobre/>}   ></Route>
                    <Route path="/projetos" element={<Projetos/>}></Route>
                    <Route path="/contatos" element={<Contatos/>}></Route>
                    <Route path="/*"        element={<NotFound/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute;