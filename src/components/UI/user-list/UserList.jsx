import React from 'react'
import UserInfo from '../user-info/UserInfo';

const UserList = ({userList}) => {
   
    const userItems = userList.map((user) => (
       <UserInfo key={user.id} name={user.name} age={user.age} />
      ));
  return (
    <div>
      {userItems}
    </div>
  )
}

export default UserList
