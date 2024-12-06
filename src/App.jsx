import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Developer></Developer>
      <Device name="laptop" price="10000"></Device>
      <Device name="Mobile" price="5000"></Device>
      <Device name="Monitor" price="20000"></Device>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Device(props){
  console.log(props)
  return <h3>Device: {props.name}, Price: {props.price} </h3>
}

function Developer(){
const devStyle = {
  border: '2px solid tomato',
  borderRadius: '10px',
  backgroundColor: 'black',
  color: 'green'
}

  return <div style={devStyle}>
    <h2>Developer</h2>
    <p>Dev Dev</p>
  </div>
}

function Person(){
  const person = {name: 'Shakil Ahmed', age: 20};
  const money = 100;
  return <h3 style={{backgroundColor: 'white', color: 'black', padding: '15px', margin: '20px', fontSize: '20px', borderRadius: '10px'}}>I am {person.name}, my age is {person.age}. Total amount of balance on my pocket is {money}. </h3>
}

const Student = () =>{
  const student = {id: '01', name: 'Shakil Ahmed', subject: 'CSE'}
  return <div className='student'>
    <h2>This is a student</h2>
    <p>Name: {student.name} </p>
    <p>Subject: {student.subject} </p>
    <p>Id: {student.id} </p>
  </div>
}
export default App
