import { createContext, useState } from 'react';

export const AuthCtx = createContext();

const AuthProvider = props =>{
    const [user, setUser] = useState('');

    return <AuthCtx.Provider value={[user, setUser]}>
        {props.children}
    </AuthCtx.Provider>
}

export default AuthProvider;