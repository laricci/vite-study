import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import styles from './Projetos.module.css';

function Projetos() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {

        const fetchRepo = async () => {
            const params   = '?page=1&per_page=50'
            const target   = 'https://api.github.com/users/laricci/repos' + params;
            const response = await fetch(target);
            const data     = await response.json();
            setRepositories(data);
        }

        fetchRepo();
        
    }, []);

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <div className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card 
                                    key  = {repo.id}
                                    name = {repo.name}
                                    desc = {repo.description}
                                    url  = {repo.html_url}
                                />
                            ))
                        }

                    </div>
                ) : (
                    <p>No Results</p>
                )

            }
            
        </section>
    )
}

export default Projetos;