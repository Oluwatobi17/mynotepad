import { createContext, useState } from 'react';

export const NoteCtx = createContext();

const NoteProvider = props =>{
    const [{noteid, isSaved}, setNoteid] = useState({noteid:0, isSaved: true});

    return <NoteCtx.Provider value={[{noteid, isSaved}, setNoteid]}>
        {props.children}
    </NoteCtx.Provider>
}

export default NoteProvider;