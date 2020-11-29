import Head from 'next/head'
import Background from '../src/components/general/Background'
import Login from '../src/components/Authentication/Login'
import styles from '../styles/Index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cride App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Background />
        <Login />
      </main>
    </div>
  )
}
