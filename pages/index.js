import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Nav from './Nav.js';
import Fade from 'react-reveal/Fade';
import {getPages} from '../lib/getPages.js';
import Grid from './Grid.js';
import Form from './Form.js';

export async function getStaticProps() {
	const allFiles = getPages();
	return {
		props: {
			allFiles,
		}
	}
}


export default function Home({allFiles}) {
	console.log(allFiles);
  return (
	  <>
	  <Nav props={allFiles}/>
    <div className={styles.container}>
	  {/*Head*/}
      <Head>
        <title>gianni.land</title>
        <meta name="description" content="A place for thoughts🙇" />
        <link rel="icon" href="/../public/favicon.ico" />
      </Head>
	  {/*End of Head */}

	  {/** One Liner */}  
      <main className={styles.main}>
	  <Fade bottom>
        <h1 className={styles.title}>
	 my name is {''}
	  <Link href="/bio">
	      <a>Gianni   </a> 
	  </Link>
        </h1>
	  <description className={styles.description}>
	  I have a passion for building software and this blog is meant to be a place for me to share this passion.
	  </description>
	  {/* End of One Liner */}

	  {/** Grid Component (featured Posts) */}

	  <section>
	  	<Grid />
	  </section>

	  {/** End of Grid Component*/}

	  {/** Contact Form*/}

	  </Fade>
	  <div>
	  <h2>Wanna get in touch?</h2>
	  	<Form />
	  </div>
	  {/**End of Contact Form*/}



          </main>


	  {/** Footer */}

	  <footer>

	  <div className={styles.submain}>
	  <Fade bottom>
	  <div className={styles.footingContainer}>
	  <a>
	  <Image
	  src="/../public/githubLogo.png"
	  height={200}
	  width={200}
	  />
	  </a>
	  <a>
	  <Image
	  src="/../public/mediumLogo.webp"
	  height={200}
	  width={200}
	  />
	  </a>
	  <a>
	  <Image
	  src="/../public/twitterLogo.jpeg"
	  height={200}
	  width={200}
	  />
	  </a>
	  <a>
	  <Image
	  src="/../public/discordLogo.png"
	  height={200}
	  width={200}
	  />
	  </a>
	  </div>
	  </Fade>
	  </div>
      </footer>
	  {/** End of Footer*/}


    </div>
	  </>
  )
}
