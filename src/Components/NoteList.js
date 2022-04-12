import { useEffect, useContext, useState } from 'react';
import { useSelector } from 'react-redux';

import NotePreamble from './NotePreamble';
import {AuthCtx} from '../store/auth-context';
import {NoteCtx} from '../store/selectednote-context';

const NoteList = () =>{
    const notes = useSelector(state => state.notes);
    const [user, setUser] = useContext(AuthCtx);
    const  [{noteid, isSaved}, setNoteid] = useContext(NoteCtx);
    const [myNotes, setMyNotes] = useState([]);
    
    useEffect(()=>{
        setUser(localStorage.getItem('user'));
    }, []);

    useEffect(()=>{
        
        let notesArr = Object.values(notes);
       
        let userNotes = [];
        for(let i=0; i<notesArr.length; i++){
            if(notesArr[i].author == localStorage.getItem('user')) userNotes.push(notesArr[i]);
        }
        
        if(userNotes.length>0){
            setNoteid({noteid: userNotes[0].id, isSaved: true});
        }else if(noteid==0){
            setNoteid({noteid, isSaved: false});
        }
        setMyNotes(userNotes);
    }, [notes]);

	return  <div className="notelist-container">
		<h5>Notes</h5>

        <div>
            {myNotes.map(item => <NotePreamble key={item.id} 
                class={item.id==noteid? 'preamble-active': ''}
                title={item.title} body={item.notes} id={item.id} /> )}
            
            {/* <NotePreamble title='Plan for this weekend' body='Complete trading book' /> */}
        </div>
	</div>
}

export default NoteList;