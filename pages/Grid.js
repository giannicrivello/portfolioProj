import styles from '../styles/Grid.module.css';


function Grid() {
	return (
		<>
		<h2>Featured Posts 👾: </h2>
		<div className={styles.grid}>
		
		{/*Featured Post Logic*/}
		<div className={styles.card}>
		<h2>Yeet Yeet</h2>
		<p>link yeet</p>
		</div>
		<div className={styles.card}>
		<h2>Yeet Yeet</h2>
		<p>link yeet</p>
		</div>
		<div className={styles.card}>
		<h2>Yeet Yeet</h2>
		<p>link yeet</p>
		{/**End of Fetured Post Logic*/}
		</div>
		</div>
		</>
	)
}
export default Grid;
