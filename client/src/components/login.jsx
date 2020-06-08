import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { UserLogin, UserComeBack } from '../redux/actions/userAction';

function ActionLogin(props, dispatch, password, email) {
    props.preventDefault();

    dispatch(UserLogin(password, email));
}

function Login(props) {

    const isLogged = useSelector(state => state.userReducer.isLogged);
    const dispatch = useDispatch();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { from } = props.location.state || { from: { pathname: '/home' } }

    useEffect(() => {
        if (localStorage.getItem("isLogged") === "true") {
            dispatch(UserComeBack());
        }

    }, []);

    return (
        isLogged ?
            <Redirect to={from} />
            :
            <div>
                <form onSubmit={(e) => ActionLogin(e, dispatch, password, email)}>
                    <h1>Login</h1>

                    <label>Email</label>
                    <input
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />

                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br />

                    <input type='submit' />
                </form>
            </div>
    )
}

export default Login;