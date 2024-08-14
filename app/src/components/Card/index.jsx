import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Card({name, desc, url}) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{desc}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5    className={styles.card_icone}/>
                    <FaCss3Alt  className={styles.card_icone}/>
                    <FaJs       className={styles.card_icone}/>
                    <FaReact    className={styles.card_icone}/>
                </div>
                <a href={url} className={styles.button} target="_blank" rel="noopener noreferrer">
                    <BsArrowRight className={styles.card_icone}/>
                </a>
            </div>
        </section>
    )
}

export default Card;