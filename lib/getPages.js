import fs from 'fs';
import path from 'path';


const pageDir = path.join(process.cwd(), 'pageTitles');

export function getPages() {
	const fileNames = fs.readdirSync(pageDir); 
	const names = fileNames.map( (fileName) => {
		const name = fileName;
		return {
			name,
		}
	})
	return names 
}
