import fs from 'fs';
import path from 'path';


const NotesDir = path.join(process.cwd(), 'Notes');

export function getNotes() {
	const allNotes = fs.readdirSync(NotesDir);
	const notes = allNotes.map( (note) => {
		const id = note;
		return {
			id,
		}
	});
	return notes
}

