import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home() {
  return (
	  <>
    <div className={styles.container}>
	  {/*Head*/}
      <Head>
        <title>gianni.land</title>
        <meta name="description" content="A place for thoughts🙇" />
        <link rel="icon" href="/../public/favicon.ico" />
      </Head>
	  {/*End of Head */}

      <main className={styles.main}>
        <h1 className={styles.title}>
	 my name is {''}
	  <Link href="/bio">
	      <a>Gianni</a> 
	  </Link>.
        </h1>
	  <description className={styles.description}>
	  I have a passion for building software and this blog is meant to be a place for me to share this passion.
	  </description>
      </main>
	  <main className={styles.main}>
	  </main>
      <footer>
      </footer>
    </div>
	  </>
  )
}
