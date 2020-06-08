import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UserRegister } from '../redux/actions/userAction';

function ActionRegister(props, history, dispatch, userName, password, email) {
    props.preventDefault();

    dispatch(UserRegister(history, userName, password, email));
}

function Register() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div>
            <form onSubmit={(e) => ActionRegister(e, history, dispatch, userName, password, email)}>
                <h1>Sign Up For An Account</h1>

                <label>Username</label>
                <input
                    name='username'
                    placeholder='Username'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                /><br />

                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br />

                <label>Email</label>
                <input
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br />

                <input type='submit' />
            </form>
        </div>
    )

}

export default Register;