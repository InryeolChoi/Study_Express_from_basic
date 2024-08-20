import React from "react";
import { Route, Routes } from 'react-router-dom';
import ChatList from "./chatList";
import Room from "./Room";

const ChatApp = () => {
    return (
        <div>
            <Routes>
                <Route path="/list" element={ChatList} />
                <Route path="/room/:roomId" element={Room} />
            </Routes>
        </div>
    )
}

export default ChatApp;