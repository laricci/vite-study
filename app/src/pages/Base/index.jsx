import { Outlet } from "react-router-dom";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Base() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet/>
            </Container>
            <Footer/>
        </main>
    )
}

export default Base;