import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { AuthCtx } from '../store/auth-context';

const Header = () =>{
	const [user, setUser] = useContext(AuthCtx);

	const navigate = useNavigate();

	const users = useSelector(state => state.users);
	const dispatch = useDispatch();

	// useEffect(()=>{
	// 	localStorage.setItem('users', JSON.stringify(users));
	// }, [users]);

	// useEffect(()=>{
	// 	if(localStorage.getItem('users')){
	// 		dispatch({type: 'UPDATE_USERS', payload: JSON.parse(localStorage.getItem('users'))});
	// 	}
	// }, []);

	const logoutHandler = () =>{
		setUser('');
		localStorage.setItem('user', '');
		navigate('/');
	}
	
	return <header>
		<nav>
			<span> <Link to='/'>My Notepad</Link> </span>

			{user.length>0 &&
				<div>
					<Link to='#' onClick={logoutHandler}>Logout</Link>
				</div>
			}
			{user.length<=0 && 
				<div>
					<Link to='/login'>Login</Link>
					<Link to='/signup'>Signup</Link>	
				</div>
			}
		</nav>
	</header>
}

export default Header;