import { useContext } from "react";

import { NoteCtx } from "../store/selectednote-context";

const Search = () =>{
    const [{noteid, isSaved}, setNoteid] = useContext(NoteCtx);
    
    const addNoteHandler = () =>{
        setNoteid({noteid: 0, isSaved: false})
    }

	return <div className="search-container">
        <i className="fa fa-search" aria-hidden="true"></i>

        <input type='text' className='search' />
        
        <i className="fa fa-plus" aria-hidden="true" onClick={addNoteHandler}></i>

    </div>
}

export default Search;