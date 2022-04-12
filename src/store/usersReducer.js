const initialState = {
    'ganiuibrahim3000@gmail.com':{
        email: 'ganiuibrahim3000@gmail.com', password: 'pass'
    }
};

const usersReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'ADD_USER':
            let userdetails = {
                email: action.payload.email,
                password: action.payload.password
            }
            let newstate = {...state, [userdetails.email]: userdetails};
            return newstate;
        case 'UPDATE_USERS':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default usersReducer;