import React from "react"
import { Link } from "react-router-dom"

const ChatList = () => {
    const rooms = [
        { id: 1, name: "Room 1" },
        { id: 2, name: "Room 2" },
        { id: 3, name: "Room 3" },
    ]

    return (
        <div>
            <h2>채팅</h2>
            <ul>
                {rooms.map((room) => (
                    <li key={room.id}>
                        <Link to={`/room/${room.id}`}>{room.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ChatList;