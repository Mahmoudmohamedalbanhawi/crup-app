
import UserList from '../UI/user-list/UserList';
import './App.css'
const userInfo =
 [
  {
    id: 1 , 
    name:"Alice" ,
     age: 25
    },
    {
    id: 2 ,
     name:"Bob" , 
     age: 30
    },
  {id: 3 , name:"Charlie" , age: 35}


 ]

function App() {

 

  return (
    <>
      <UserList userList = {userInfo}/>
    
    </>
  )
}

export default App
