import fs from 'fs';
import path from 'path';


const pageDir = path.join(process.cwd(), 'BlogPosts');

export function getBlogPosts() {
	const fileNames = fs.readdirSync(pageDir); 
	const names = fileNames.map( (fileName) => {
		const id = fileName;
		return {
			id,
		}
	})
	return names 
}
