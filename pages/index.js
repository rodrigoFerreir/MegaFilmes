import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home({ list }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo!
        </h1>

        <a className={styles.link}>
          <Link href="/busca">Ir para a pagina de Busca</Link>
        </a>

        <div className={styles.container_fimes}>
          <ul>
            {list.map((item) => (
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
        </div>
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


export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/trending')
  const json = await res.json();

  return {
    props: {
      list: json.list
    }
  }
}
