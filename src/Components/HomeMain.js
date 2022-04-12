//import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Notes from '../Components/Notes';
import NotesDetails from '../Components/NotesDetails';

const HomeMain = () =>{
	const dispatch = useDispatch();
	const notes = useSelector(state => state.notes);


	useEffect(()=>{
		let localNotes = JSON.parse(localStorage.getItem('mynotes'));
		if(localNotes){
			dispatch({type: 'WRITE_NOTE', payload: localNotes});
		}
	}, []);

	useEffect(()=>{
		localStorage.setItem('mynotes', JSON.stringify(notes));
	}, [notes]);

	return <main>
		<div className="home-container">
			<Notes />
			<NotesDetails />
		</div>
	</main>
}

export default HomeMain;