import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './home/home.jsx';
import Login from './home/login.jsx';
import Register from "./home/register.jsx";
import ChatApp from "./chatList/chatApp.jsx";
import FriendApp from "./friendList/friendApp.jsx"

const App = () => {    
    return (
        <div className="container">
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/chat" element={<ChatApp />}/>
                    <Route path="/friend" element={<FriendApp />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;