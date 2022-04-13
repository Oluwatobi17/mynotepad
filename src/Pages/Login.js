import { useSelector, useDispatch } from 'react-redux';
import {useRef, useContext, useState, useEffect} from 'react';

import Header from '../Components/Header';

import { AuthCtx } from '../store/auth-context';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

const Login = props =>{
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [user, setUser] = useContext(AuthCtx);
    const [error, setError] = useState();

    const users = useSelector(state => state.users);
    const dispatch = useDispatch();

    const navigate = useNavigate();
    
    const loginHandler = (event) =>{
        event.preventDefault();

        let enteredEmail = emailRef.current.value;
        let enteredPass = passwordRef.current.value;
        if(!enteredEmail || !enteredPass){
            let message;
            if(props.type && props.type=='signup') message = 'Please fill all fields';
            else message = 'Invalid Login details';
            setError(message);
            return;
        }

        if(users[enteredEmail] && users[enteredEmail].password===enteredPass){
            
            setUser(enteredEmail);
        }else if(props.type && props.type=='signup'){
            dispatch({type: 'ADD_USER', payload: {
                email: enteredEmail,
                password: enteredPass
            }});
            setUser(enteredEmail);
            
            localStorage.setItem('users', JSON.stringify(users));
            
        }else{
            setError('Invalid Login details');
            return;
        }

        localStorage.setItem('user', enteredEmail);
        navigate('/');

    }

    const handleChange = () =>{
        setError(null);
    }

	return <> 
        <Header />
        <form onSubmit={loginHandler}>
            <div className="login-container">
                <h2>{props.type=='signup'? 'SignUp': 'Login'}</h2>
                {error && <p className='error'>{error}</p>}
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <input type='text' placeholder='Email' ref={emailRef} onChange={handleChange} />

                <i class="fa fa-lock" aria-hidden="true"></i>
                <input type='password' placeholder='Password' ref={passwordRef} onChange={handleChange}/>

                <input type='submit' value={props.type=='signup'? 'SIGNUP': 'LOGIN'} />
            </div>
        </form>

        <Footer />
    </>
}

export default Login;