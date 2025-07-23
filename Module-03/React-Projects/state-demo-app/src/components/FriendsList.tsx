import React, { useState } from 'react'

export default function FriendsList() {
    const [friends, setFriends] = useState(["John", "Smith"])
    const hanldeAddFriend = (newFriend: string) =>{
        setFriends((friends)=> [...friends, newFriend])
    }
  return (
    <div>
        <h2>My Friends List</h2>
        {
            friends.map((name, index)=> <li key={index}>
                {name}
            </li>)
        }
        <button onClick={() => hanldeAddFriend("Peter")}>Add Peter</button>
    </div>
  )
}
