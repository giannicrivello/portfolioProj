import {getNotes} from '../lib/getNotes.js';
import styles from '../styles/Notes.module.css';
import Image from 'next/image';

export async function getStaticProps() {
	const notes = getNotes();
	return {
		props: {
			notes,
		}
	}
} 


function Notes(props) {
	console.log(props.notes);
	return (
		<>
		<title>Notes</title>
		<meta name="Notes" content="Notes for Gianni.Land" />

		{/**Title*/}
		<div className={styles.title}>
		<h1>Note Title</h1>
		<h2>Sub heading for post</h2>
		<p>date for post</p>
		{/**End of Title*/}

		{/**Cover Image*/}
	        </div>
		<div className={styles.image}>
		<Image
		src="/../public/animelogo.jpeg"
		height={200}
		width={400}
		/>
		</div>

		{/**End of Cover Image*/}

		<div className={styles.grid}>

		{/**Body*/}

		{/**End of Body*/}

		{/**Footer*/}

		{/**End of Footer*/}

		<ul>
		{props.notes.map(({id}) => (
			<li>{id}</li>
		)) }
		<li>hello</li>
		</ul>
		</div>
		</>

	) 
}

export default Notes;
