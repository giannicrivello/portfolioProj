import styles from '../styles/Nav.module.css';
import fs from 'fs';
import path from 'path';

process.chdir('../');
const pageDir = path.join(process.cwd(), 'pages');
process.chdir('lib');

export function getPages() {
	const fileName = fs.readdirSync(pageDir);
	const allPageData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.js$/, '');
		return {
			id
		}
	})
	return {allPageData}
}
