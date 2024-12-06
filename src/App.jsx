import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person(){
  const person = {name: 'Shakil Ahmed', age: 20};
  const money = 100;
  return <h3>I am {person.name}, my age is {person.age}. Total amount of balance on my pocket is {money}. </h3>
}

const Student = () =>{
  const student = {id: '01', name: 'Shakil Ahmed', subject: 'CSE'}
  return <div>
    <h2>This is a student</h2>
    <p>Name: {student.name} </p>
    <p>Subject: {student.subject} </p>
    <p>Id: {student.id} </p>
  </div>
}
export default App
