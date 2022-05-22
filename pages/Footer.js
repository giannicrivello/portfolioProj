import Image from 'next/image';

const height = 100;
const width = 100;

function Footer() {
	return (
		<>
	  <a>
	  <Image
	  src="/../public/githubLogo.png"
	  height={height}
	  width={width}
	  />
	  </a>
	  <a>
	  <Image
	  src="/../public/mediumLogo.webp"
	  height={height}
	  width={width}
	  />
	  </a>
	  <a>
	  <Image
	  src="/../public/twitterLogo.jpeg"
	  height={height}
	  width={width}
	  />
	  </a>
	  <a>
	  <Image
	  src="/../public/discordLogo.png"
	  height={height}
	  width={width}
	  />
	  </a>
		</>
	)
}

export default Footer;
