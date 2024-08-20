import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Room = () => {
    const { roomId } = useParams();
    const navigate = useNavigate();

    // 상태 정의
    const [roomName, setRoomName] = useState(`Room ${roomId}`);
    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(roomName);
    const [messages, setMessages] = useState([]);
    const [participants, setParticipants] = useState(["Alice", "Bob", "Charlie"]);
    const [newMessage, setNewMessage] = useState('');

    const handleNameChange = () => {
        setRoomName(newName);
        setIsEditing(false);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, newMessage]);
            setNewMessage('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="room-container">
            {/* 상단 영역 */}
            <div className="header">
                <h1>{roomName}</h1>
                <button onClick={() => navigate('/list')}>Leave Room</button>
                <button onClick={() => setIsEditing(true)}>Change Room Name</button>
                {isEditing && (
                    <div className="edit-modal">
                        <input 
                            type="text" 
                            value={newName} 
                            onChange={(e) => setNewName(e.target.value)} 
                        />
                        <button onClick={handleNameChange}>Save</button>
                    </div>
                )}
            </div>

            {/* 중단 영역 */}
            <div className="main-content">
                {/* 왼쪽: 참가자 목록 */}
                <div className="participants">
                    <h2>Participants</h2>
                    <ul>
                        {participants.map((participant, index) => (
                            <li key={index}>{participant}</li>
                        ))}
                    </ul>
                </div>

                {/* 오른쪽: 대화 목록 */}
                <div className="chat-history">
                    <h2>Chat History</h2>
                    <div className="messages">
                        {messages.map((message, index) => (
                            <div key={index} className="message">
                                {message}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 하단 영역 */}
            <div className="footer">
                <input 
                    type="text" 
                    value={newMessage} 
                    onChange={(e) => setNewMessage(e.target.value)} 
                    onKeyPress={handleKeyPress}
                    placeholder="Type a message"
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Room;