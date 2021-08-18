import React, { useState } from 'react';
import { axiosWithAuth } from './axiosAuth';
import { useHistory } from 'react-router-dom';


function AddFriend() {
    let history = useHistory();
    const [friendForm, setFriendForm] = useState({
        name: '',
        email: '',
        age: ''
    })

    function onChangeHandler(e) {
        console.log(e.target.name);
        switch(e.target.name) {
            case 'name': {
                return setFriendForm({...friendForm, name: e.target.value})
            }
            case 'email': {
                return setFriendForm({...friendForm, email: e.target.value})
            }
            default: {
                return setFriendForm({...friendForm, age: e.target.value})
            }
        }
    }

    function submitForm(e) {
        e.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', friendForm)
            .then((res) => {
                history.push('/friends')
            });
    }
    return (
        <div>
            <form>
                <input type='text' name='name' placeholder='Name' value={friendForm.name} onChange={onChangeHandler}/>
                <input type='text' name='email' placeholder='Email' value={friendForm.email} onChange={onChangeHandler}/>
                <input type='text' name='age' placeholder='Age' value={friendForm.age} onChange={onChangeHandler}/>
                <button onClick={submitForm}>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;