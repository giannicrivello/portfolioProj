import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Nav from './Nav.js';
import Fade from 'react-reveal/Fade';
import Footer from './Footer.js';


import Grid from './Grid.js';
import Form from './Form.js';
import styled from 'styled-components';
import {getNotes} from '../lib/getNotes.js';
import {getBlogPosts} from '../lib/getBlogPosts.js';
import {getProjects} from '../lib/getProjects.js';
export async function getStaticProps() {
	const notes = getNotes();
	const blogs = getBlogPosts();
	const projects = getProjects();
	return {
		props: {
			notes,
			blogs,
			projects,
		}
	}
} 


{/**Rainbow color gen system*/}
const Intro1 = styled.p`
	color: #2f3d44;
`;
const Intro2 = styled.p`
	color: #2f3d44;
`;
const Intro3 = styled.p`
	color: #2f3d44;
`;
const Mark = styled.mark`
	background: #e83c45;
`;
{/**End of Rainbow color gen system*/}



export default function Home(props) {
	console.log(props)
  return (
	  <>
	  {/*Head*/}
      <Head>
        <title>gianni.land</title>
        <meta name="description" content="A place for thoughts🙇" />
        <link rel="icon" href="/../public/favicon.ico" />
      </Head>
	  {/*End of Head */}
    <div className={styles.container}>

	  {/**Nav*/}
	  {/*<Nav props={allFiles}/*/}
	  {/**End of Nav*/}




	  {/** One Liner */}  
      <main className={styles.main}>
	  <Fade bottom>
        <h1 className={styles.title}>
	 my name is {''}
	  <Link href="/Bio">
	      <a>Gianni   </a> 
	  </Link>
        </h1>
	  <description className={styles.description}>
	  Welcome to gianni.land!
	  <br/>Here you'll find some of the topics that get me up in the morning ☕️ <br/> 

	  <Intro1>

	  <Link href="/NotesLanding"><Mark><a>Notes</a></Mark></Link> is a place for ideas that are not fully in effect yet.<br/>
	  </Intro1>

	  <Intro2>
	  <Link href="/ProjectsLanding"><Mark><a> Projects </a></Mark></Link> are either on going or stable peices of software i've made available for open source on my
	   <Link href="https://github.com/giannicrivello"><Mark><a> github </a></Mark></Link>
	  </Intro2>

	  <Intro3>
	  <br/> <Link href="/BlogLanding"><Mark><a>Blog</a></Mark></Link> can be thought of a more refined notes section where I share my opinion.
	  </Intro3>
	  

	  {/** Contact Form*/}
	  <div>
	  	<Form />
	  </div>
	  {/**End of Contact Form*/}


	  </description>
	  {/* End of One Liner */}

	  {/** Grid Component (featured Posts) */}
	  <Grid notes={props.notes}/>
	  {/** End of Grid Component*/}
	  
	  </Fade>



	 

          </main>


	  {/** Footer */}

	  <footer>

	  <div className={styles.submain}>
	  <Fade bottom>
	  <div className={styles.footingContainer}>
	  <Footer />
	  </div>
	  </Fade>
	  </div>
      </footer>
	  {/** End of Footer*/}
    </div>
	  </>
  )
}
