import { useContext, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import {NoteCtx} from '../store/selectednote-context';

const Editor = ({onSave, changeHandler}) =>{
	const  [{noteid, isSaved}, setNoteid] = useContext(NoteCtx);
	const titleRef = useRef();
	const bodyRef = useRef();

	const notes = useSelector(state => state.notes);
	//alert(noteid);

	useEffect(()=>{
		if(notes[noteid]){
			let editNote = notes[noteid];
			titleRef.current.value = editNote.title;
			bodyRef.current.value = editNote.notes;
		}else{
			titleRef.current.value = '';
			bodyRef.current.value = '';
		}
	}, [noteid]);

	const editHandler = () =>{
		onSave(false)
		changeHandler({title: titleRef.current.value, body: bodyRef.current.value});
	}

	return  <div className="editor-container">
        <input type='text' placeholder="Enter Note Title" maxLength={40} ref={titleRef} onChange={editHandler}/>

		<textarea rows="20" placeholder="Enter Note" ref={bodyRef} onChange={editHandler}>
			
		</textarea>
	</div>
}

export default Editor;