import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {
    return (
        <>
        <Header />
        <section className="container">
          <div>
            <p>
              Olá, sou <br/>
              <span>Laura Ricci</span><br/>
              Dev Full Stack
            </p>
            <Link to="/sobre" className="btn btn-red">
              Saiba mais sobre mim
            </Link>
          </div>
          <figure>
            <img className="img-home" src="/developer-red.svg" alt="Imagem de Home"/>
          </figure>
        </section>
        <Footer />
      </>
    )
}

export default Home;
