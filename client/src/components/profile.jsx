import React from "react";
import { useSelector } from 'react-redux';

function Profile() {

    const username = useSelector(state => state.userReducer.username)
    const email = useSelector(state => state.userReducer.email)

    return (
        <div>
            <h1>Profile</h1>
            <h2>username: {username}</h2>
            <h2>email: {email}</h2>
        </div>
    )
}

export default Profile;