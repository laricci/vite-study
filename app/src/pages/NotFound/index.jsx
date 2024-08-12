import Container from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <>
            <h2 className={styles.titulo2}>Ops! Parece que essa página não existe...</h2>
            <div className={styles.textos}>
                <span className={styles.texto_grande}>404</span><br/>
                <strong className={styles.texto_vermelho}>Not Found</strong>
            </div>
        </>
    )
}

export default NotFound;