import Head from 'next/head'
import Link from 'next/link';
import { useState } from "react"
import styles from '../styles/Home.module.css'

export default function Busca({ list }) {
    const [searchText, setSeachText] = useState('');
    const [movieList, setMovieList] = useState([]);

    const handleSearch = async () => {
        if (searchText !== '') {
            const result = await fetch(`http://localhost:3000/api/search?filme=${searchText}`);
            const json = await result.json();
            setMovieList(json.list);
        }
    }

    return (
        <div className={styles.container}>
            <a className={styles.link}>
                <Link href="/">Home</Link>
            </a>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Busca
                </h1>

                <input
                    className={styles.input}
                    type="text"
                    placeholder="Digite o nome do filme"
                    value={searchText}
                    onChange={e => setSeachText(e.target.value)} />
                <button className={styles.button} onClick={handleSearch}>Buscar</button>

                <hr />
                <ul>
                    {movieList.map((item) => (
                        <li>
                            <a href={`/movie/${item.id}`}>
                                <>
                                    <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} width="150" /><br />
                                    <a className={styles.description}>{item.title}</a>
                                </>
                            </a>
                        </li>
                    ))}
                </ul>

            </main>
            <footer className={styles.footer}>
                <a
                    href="https://github.com/rodrigoFerreir"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Desenvolvido por: Rodrigo Ferreira
                </a>
            </footer>
        </div>
    )
}

