import styles from './Home.module.css';

function Home() {
    return (
      <>
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
      </>
    )
}

export default Home;
