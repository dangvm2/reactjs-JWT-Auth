import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { UserLogout, UserLogoutAll } from '../redux/actions/userAction';


function Logout() {

    const isLogged = useSelector(state => state.userReducer.isLogged);
    const dispatch = useDispatch();

    return (
        isLogged ?
            (
                <div>
                    <button onClick={() => dispatch(UserLogout())}>Logout</button>
                    <br />
                    <br />
                    <button onClick={() => dispatch(UserLogoutAll())}>Logout all devices</button>
                </div>
            )
            :
            (<h3>{"You're not logged in"}</h3>)
    )
}

export default Logout;