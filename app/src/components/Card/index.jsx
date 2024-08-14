import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";

function Card() {
    return (
        <section className={styles.card}>
            <h3>Título do projeto</h3>
            <p>Texto descrito do projeto</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5    className={styles.card_icone}/>
                    <FaCss3Alt  className={styles.card_icone}/>
                    <FaJs       className={styles.card_icone}/>
                    <FaReact    className={styles.card_icone}/>
                </div>
                <button className={styles.button}>
                    <BsArrowRight className={styles.card_icone}/>
                </button>
            </div>
        </section>
    )
}

export default Card;