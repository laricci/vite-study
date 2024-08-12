import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";

function Contatos() {
    return (
        <>
            <section className={styles.contatos}>
                <h2>Contatos</h2>
                <h3>Entre em contato</h3>
                <p>Para que possamos conversar mais sobre.</p>
                <div className={styles.icones}>
                    <a href="mailto:example@gmail.com" target='_blank' rel="noopener noreferrer">
                        <GoMail className={styles.icone}/>
                    </a>
                    <a href="#" target='_blank' rel="noopener noreferrer">
                        <BsInstagram className={styles.icone}/>
                    </a>
                    <a href="#" target='_blank' rel="noopener noreferrer">
                        <BsYoutube className={styles.icone}/>
                    </a>
                    <a href="#" target='_blank' rel="noopener noreferrer">
                        <BsGithub className={styles.icone}/>
                    </a>
                    <a href="#" target='_blank' rel="noopener noreferrer">
                        <BsLinkedin className={styles.icone}/>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Contatos;