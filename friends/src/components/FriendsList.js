import { axiosWithAuth } from './axiosAuth';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FriendsList.css';

function FriendsList(props) {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then((res) => setFriends(res.data));
    },[])
    return (
        <div className='friends-list'>
            <h1>Friends List:</h1>
            {friends.length > 0 ? friends.map((friend) => <h2 key={friend.id}>{friend.name}</h2>) : <h2>Loading...</h2>}
            <Link to='/friends/addfriends'>Add a friend!</Link>
        </div>
    )
}

export default FriendsList;