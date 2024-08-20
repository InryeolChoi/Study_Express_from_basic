import React, { useState } from 'react';

const FriendList = () => {
    // 더미 데이터
    const [friends, setFriends] = useState([
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ]);
    const [searchName, setSearchName] = useState('');
    const [showSearchModal, setShowSearchModal] = useState(false);

    // 친구 목록에서 친구 삭제
    const handleDelete = (id) => {
        setFriends(friends.filter(friend => friend.id !== id));
    };

    // 새 채팅 시작
    const handleStartChat = (name) => {
        alert(`Start chat with ${name}`);
    };

    // 친구 추가 (모달에서)
    const handleAddFriend = () => {
        if (searchName.trim()) {
            const newFriend = {
                id: friends.length + 1,
                name: searchName,
                email: `${searchName.toLowerCase()}@example.com`
            };
            setFriends([...friends, newFriend]);
            setSearchName('');
            setShowSearchModal(false);
        }
    };

    return (
        <div>
            <div className="header">
                <h2>친구 목록</h2>
                <button onClick={() => setShowSearchModal(true)}>친구찾기</button>
                {showSearchModal && (
                    <div className="search-modal">
                        <input
                            type="text"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            placeholder="유저네임 입력"
                        />
                        <button onClick={handleAddFriend}>추가</button>
                        <button onClick={() => setShowSearchModal(false)}>닫기</button>
                    </div>
                )}
            </div>

            <div className="friend-list">
                {friends.map(friend => (
                    <div key={friend.id} className="friend-item">
                        <p><strong>이름:</strong> {friend.name}</p>
                        <p><strong>이메일:</strong> {friend.email}</p>
                        <button onClick={() => handleStartChat(friend.name)}>새 채팅 시작</button>
                        <button onClick={() => handleDelete(friend.id)}>삭제</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendList;