import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from 'next/Image';


export default function Bio () {
	return(
	<>
	<div className={styles.container}>
		{/* Head */}
	<Head>
		<title>Bio</title>
		<meta name="description" content="Gianni's Bio"/>
	</Head>
		{/* End of Head */}
	<main className={styles.main}>
		<code className={styles.titleCode}>fetch("Gianni") -> Bio</code> 
		<br />
		<br />
		<br />
		<Image
		priority
		className={styles.borderCircle}
		src="/../public/profilePic.jpeg"
		width={213}
		height={320}
		/>
	</main>
	</div>
		</>
	)
}
