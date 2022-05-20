import styles from '../styles/Nav.module.css';
import { getPages } from '../lib/getPages.js';

export async function getStaticProps() {
	const allPages = getPages();
	return {
		props: {
			allPages,
		}
	}
}

export default function Nav(props) {
	return (
		<ul>
		{/*{props.allPages.map( (id) => {
			<li>{id}</li>
		})}*/}
		</ul>
	)
}








