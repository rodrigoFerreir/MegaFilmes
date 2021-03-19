import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css';

export default function MovieItem({ info }) {
    return (
        <div className={styles.container}>
            <a className={styles.link} href="/">Home</a>
            <Head>
                <title>MegaFilmes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h2 className={styles.title}>
                    Filme: <h5>{info.title}</h5>
                </h2>
                <h3>Nota:{info.vote_average}</h3>

                <a className={styles.link}>
                    <Link href="/busca">Ir para a pagina de Busca</Link>
                </a>
                <p>{info.overview}</p>
                <img src={`https://image.tmdb.org/t/p/original${info.backdrop_path}`} width="400" />


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


export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:3000/api/movie/${context.params.id}`)
    const json = await res.json();
    return {
        props: {
            info: json.list
        }
    }
}
