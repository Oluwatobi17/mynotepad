import { Routes, Route, useNavigate } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useState } from 'react';

import { AuthCtx } from './store/auth-context';

import Home from './Pages/Home';
import Login from './Pages/Login';

const App = () =>{
	const [user, setUser] = useContext(AuthCtx);
	const dispatch = useDispatch();
	const [userS, setUserS] = useState(false);

	const users = useSelector(state => state.users);

	useEffect(()=>{
		if(localStorage.getItem('user')){
			setUserS(localStorage.getItem('user'));
			setUser(localStorage.getItem('user'));
		}
	}, []);

	useEffect(()=>{
        let storedUser = JSON.parse(localStorage.getItem('users'));

		if(storedUser==null || storedUser===undefined){
			localStorage.setItem('users', JSON.stringify(users));
			return;
		}

		if(JSON.stringify(users) !== JSON.stringify(storedUser)){
			if(Object.keys(users).length > Object.keys(storedUser).length){
				localStorage.setItem('users', JSON.stringify(users));
			}else{
				dispatch({type: 'UPDATE_USERS', payload: storedUser});
			}
		}

    }, [users]);

	return <>
		<Routes>
			{user.length>0 && <Route path='/' element={<Home />} />}
			<Route path='/login' element={<Login type='login' />}/>
			<Route path='/signup' element={<Login type='signup' />}/>
			<Route path='*' element={<Login type='login'/>} />
		</Routes>
	</>
}

export default App;