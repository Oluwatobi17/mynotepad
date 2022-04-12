//import { Link } from 'react-router-dom';

import Search from './Search';
import NoteList from './NoteList';

const Notes = () =>{
	return  <div className="notes-container">
		<Search />
		<NoteList />
	</div>
}

export default Notes;