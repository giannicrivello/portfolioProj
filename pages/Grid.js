import styles from '../styles/Grid.module.css';



function Grid({notes}) {
	console.log(notes)
	return (
		<>
		<h2>Featured Posts 👾: </h2>
		<div className={styles.grid}>
		
		{/*Featured Post Logic*/}
		{notes.map( ({id}) => (

			<div className={styles.card}>

			<p>posted in &nbsp; >> &nbsp; notes*</p>
			<h1>{id}</h1>
			<br/>
			<h2>a dynamic post pulled in from file system</h2>
			</div>

		))}
		{/**Title*/}
		    {/**Adding publication*/}

		{/**End of Title*/}

		{/**Meta Description*/}

		{/**End of Meta Description*/}

		{/**Date*/}
		{/**End of Date*/}
		</div>
		</>
	)
}
export default Grid;
