import Footer from "./components/Footer";
import Header from "./components/Header";
import './App.css';

function App() {
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
          <button type="button" className="btn btn-red">
            Saiba mais sobre mim
          </button>
        </div>
        <figure>
          <img className="img-home" src="/developer-red.svg" alt="Imagem de Home"/>
        </figure>
      </section>
      <Footer />
    </>
  )
}

export default App
