import React from "react";
import { Route, Routes } from 'react-router-dom';
import FriendList from "./FriendList.jsx";

const FriendApp = () => {
    return (
        <div>
            <Routes>
                <Route path="/list" element={FriendList}/>
            </Routes>
        </div>
    )
}

export default FriendApp;
