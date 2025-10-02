
import { useState } from 'react';
import UserList from '../UI/user-list/UserList';
import './App.css'
import Container from '../LayOut/Container/Container';
import Header from '../LayOut/Header/Header';
import UserInput from '../UI/user-input/UserInput';
import Button from '../UI/Button/Button';
import Form from '../UI/Form/Form';
import Modal from '../UI/Modal/Modal';
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

const [showModal , setShowModal] = useState(false);
 const [users , setUsers] = useState(userInfo);
 const [name , setName] = useState('');
 const [age , setAge] = useState('');

 const saveUser = (e)=>{
  e.preventDefault();
  const newUser = {
    id: Math.random().toString(),
    name : name,
    age : age
  }
  setUsers((prevUsers)=>{
    return [...prevUsers , newUser]
  });
  setName('');
  setAge('');
  modalHandler();
 }

 const modalHandler = ()=>{
  setShowModal(prev => !prev);
 }
  
  return (
    <>
      <Container>
      <Header><h1>User Information</h1></Header>
      <Button type="button" onClick={modalHandler}>Add New User</Button>
      {showModal && (
        <Modal onClose={modalHandler} > 
        <Form onSubmit={saveUser}>
       <label htmlFor="name">Name:</label>
        <UserInput type="text" placeholder="enter your name" value={name} onChange={setName} />
        <label htmlFor='age'>Age:</label>
        <UserInput type="number" placeholder="enter your age" value={age} onChange={setAge} />
        <Button>Add User</Button>
      </Form>
        
      </Modal>
      
      )}
      
      <UserList userList = {users}/>
      </Container>
    
    </>
  )
}

export default App
