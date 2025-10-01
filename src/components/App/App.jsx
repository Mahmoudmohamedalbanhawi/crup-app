
import { useState } from 'react';
import UserList from '../UI/user-list/UserList';
import './App.css'
import Container from '../LayOut/Container/Container';
import Header from '../LayOut/Header/Header';
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

 const [users , setUsers] = useState(userInfo);
  
  return (
    <>
      <Container>
      <Header><h1>User Information</h1></Header>
      <UserList userList = {users}/>
      </Container>
    
    </>
  )
}

export default App
