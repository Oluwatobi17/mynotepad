const initialState = {
    41: {title: "Plans", author: 'ganiuibrahim3000@gmail.com', notes: "This is the note", id: 41},
    11: {title: "Monday Schedule", author: 'ganiuibrahim3000@gmail.com', notes: "NOte", id: 11}
};

const notesReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_NOTE':
            let newnote = {
                title: action.payload.title,
                author: action.payload.author,
                notes: action.payload.notes,
                id: action.payload.id
            };
            let oldstate = {...state}
            oldstate[newnote.id] = newnote;
            return {...oldstate};
        case 'EDIT_NOTE':
            let note = {...state};
            let id = action.payload.id;
            if(note[id]){
                note[id] = {
                    ...note[id],
                    title: action.payload.title,
                    notes: action.payload.notes
                }
            }
            return {...note}
        case 'DELETE_NOTE':
            let mynotes = {...state};
            delete mynotes[action.payload.id];
            return {...mynotes};
        case 'WRITE_NOTE':
            return {...action.payload}
        default:
            return {...state};
    }
}

export default notesReducer;