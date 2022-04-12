import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DetailsNav from './DetailsNav';
import Editor from './Editor';
import { NoteCtx } from '../store/selectednote-context';
import { AuthCtx } from '../store/auth-context';
import { generateFn } from '../utils';

const NotesDetails = () =>{
	const  [{noteid, isSaved}, setNoteid] = useContext(NoteCtx);
	const [user, setUser] = useContext(AuthCtx);
	const [{title, body}, setNote] = useState({title: '', body: ''});

	const dispatch = useDispatch();
	const mynotes = useSelector(state => state.notes);

	const handleSave = (saved) =>{
		setNoteid({noteid, isSaved: saved});
	}

	const handleChangeFromEditor = (values) =>{
		setNote(values);
	}

	const saveNoteHandler = () =>{
		if(title && body){
			if(mynotes[noteid]){
				dispatch({type: 'EDIT_NOTE', payload: {
					title,
					id: noteid,
					notes: body
				}});
			}else{
				dispatch({type: 'ADD_NOTE', payload: {
					title,
					notes: body,
					author: user,
					id: generateFn()
				}})
				
			}
			return;
		}
		alert('Please enter a note before saving');
	}

	return  <div className="notedetails-container">
        <DetailsNav />

		<div className='save'> {isSaved? 'Saved' : <button onClick={saveNoteHandler}>Save</button>} </div>

		<Editor onSave={handleSave} changeHandler={handleChangeFromEditor} />
	</div>
}

export default NotesDetails;