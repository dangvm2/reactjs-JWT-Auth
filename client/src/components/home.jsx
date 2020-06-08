import React from "react";
import { useSelector } from 'react-redux';

function Home() {

    const username = useSelector(state => state.userReducer.username)

    return (
        <div>
            <h1>HOME PAGE</h1>
            <h2>Hello: {username}</h2>
        </div>
    )
}

export default Home;