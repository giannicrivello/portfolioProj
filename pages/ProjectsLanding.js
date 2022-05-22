import {getNotes} from '../lib/getNotes.js';
import styles from '../styles/Notes.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Fade from 'react-reveal';
import Footer from './Footer.js';

export async function getStaticProps() {
	const notes = getNotes();
	return {
		props: {
			notes,
		}
	}
} 


function NotesLanding(props) {
	console.log(props.notes);
	return (
		<>
		<title>Notes Land</title>
		<meta name="Notes Land" content="Notes for Gianni.Land" />

		{/**Header*/}
		<div className={styles.page}>
		<div className={styles.NotesLandingTitle}>
		<h1>Notes*</h1>
		<p>Notes are ideas that isn't in any sort of project phase</p>
		<p>Raw, unrefinded, possibly unfeasible ideas.</p>
		<p>If one of these ideas inspire you...Take them! All I ask is you let me know so I can star your project on github 💡</p>

		</div>
		{/**End of Header*/}

		{/**Body*/}
		<br/>
		{props.notes.map( ({id}) => (
                      <Link href="/Note">
		      <div className={styles.NotesLandingList}>
			<br/>
			<li><a>{id}</a> &nbsp;  &nbsp;  &nbsp;   &nbsp; ---> &nbsp;&nbsp; &nbsp; &nbsp; 03/12/22 &nbsp; <p>(last edit)</p></li>
			</div></Link>
		) )}

		{/**End of Body*/}

	  {/** Footer */}

	  <Fade bottom>
	<div className={styles.footer}>
		<Footer />
	</div>
	  </Fade>
		{/**End of Footer*/}
		</div>
		</>
	) 
}

export default NotesLanding;
