import styles from '../styles/Nav.module.css';
import Image from 'next/image';

function Nav(props) {
	console.log(props);
	return (
		<div className={styles.nav}>
		<ul className={styles.nav_container}>
		<div className={styles.nav_logo}>
		<Image
		src='/../public/animelogo.jpeg'
		height={50}
		width={75}
		/>
		</div>
		{props.props.map(({name}) =>( 
			<li className={styles.nav_options} key={name}>
				{name}
			</li>
		))}
		</ul>
		</div>
	)
}

export default Nav;








