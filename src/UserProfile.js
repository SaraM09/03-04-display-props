import React from 'react'

function UserProfile({username, age}) {

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {username}</p>
            <p>Age: {age}</p>
        </div>
    );
}
export default UserProfile