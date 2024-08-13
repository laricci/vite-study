import styles from "./Sobre.module.css";
import avatar from "./img/avatar.svg";
import html from "./img/icon-html.svg";
import css from "./img/icon-css.svg";
import js from "./img/icon-js.svg";
import react from "./img/icon-react.svg";
import node from "./img/icon-node.svg";
import sql from "./img/icon-sql.svg";

function Sobre() {
    return (
        <>
            <section className={styles.sobre}>
                <div className={styles.bio}>
                    <img src={avatar} alt="Avatar" className={styles.avatar}/>
                    <div className={styles.textos}>
                        <h2>Sobre</h2>
                        <p>
                            Sou <span>Laura Ricci</span><br/>
                            <strong>Dev Full Stack</strong>
                        </p>
                        <p>Trabalho com desenvolvimento web desde 2000.</p>
                        <p>Sou apaixonada por transformar ideias em realidade digital.</p>
                        <p>
                            Especializado em criações dinamicas e intuitivas, <br/>
                            com foco na experiência do usuário.
                        </p>
                    </div>
                </div>
                <div className={styles.techs}>
                    <h3>Techs</h3>
                    <div className={styles.icones}>
                        <img src={html}  alt="Ícone HTML"></img>
                        <img src={css}   alt="Ícone CSS"></img>
                        <img src={js}    alt="Ícone JS"></img>
                        <img src={react} alt="Ícone REACT"></img>
                        <img src={node}  alt="Ícone NODE"></img>
                        <img src={sql}   alt="Ícone SQL"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sobre;