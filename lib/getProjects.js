import fs from 'fs';
import path from 'path';

const ProjectDir = path.join(process.cwd(), 'ProjectPosts');


export function getProjects() {
	const allProjects = fs.readdirSync(ProjectDir);
	const projects = allProjects.map( (project) => {
		const id = project;
		return {
			id,
		}
	});
	return projects
} 
