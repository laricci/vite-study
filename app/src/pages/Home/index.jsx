import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from './Home.module.css';

function Home() {
    return (
        <>
        <Header />
        <Container>
          <section className={styles.home}>
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
        </Container>
        <Footer />
      </>
    )
}

export default Home;
