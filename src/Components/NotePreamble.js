import { useContext } from "react";

import { NoteCtx } from "../store/selectednote-context";

const NotePreamble = props =>{
	const  [{noteid, isSaved}, setNoteid] = useContext(NoteCtx);

	const handleChangeNodeId = () =>{
		if(isSaved){
			setNoteid({noteid: props.id, isSaved: true});
		}else if(!isSaved && props.id!=noteid){
			alert('Please save current note before you proceed');
		}
	}
	return  <div className={`preamble-container ${props.class}`} onClick={handleChangeNodeId}>
		<h3>{props.title}</h3>

        <p>{props.body}</p>
	</div>
}

export default NotePreamble;