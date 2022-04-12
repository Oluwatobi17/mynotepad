import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import {generateFn} from '../utils';

import { AuthCtx } from "../store/auth-context";
import { NoteCtx } from "../store/selectednote-context";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const DetailsNav = () =>{
	const [user, setUser] = useContext(AuthCtx);
	const [{noteid, isSaved}, setNoteid] = useContext(NoteCtx);

	const mynotes = useSelector(state => state.notes);
	const dispatch = useDispatch();
	const deleteHandler = () =>{
		if(mynotes[noteid].author === user){
			dispatch({type: 'DELETE_NOTE', payload: {id: noteid}});
			setNoteid({noteid: 0, isSaved: true});
		}else{
			// Shouldn't happen
			alert("Sorry, you can't delete note that does not belongs to you");
		}
	}

	return  <div className="detailsnav-container">
		
        	<i class="fa fa-trash-o" aria-hidden="true" title="Delete Note" 
			onClick={deleteHandler}
			></i>
		<span className="authoremail">{user}</span>
	</div>
}

export default DetailsNav;