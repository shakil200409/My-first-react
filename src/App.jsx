import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  const [count, setCount] = useState(0);

  const actors = [
    "Bappa Raj",
    "Sakib Khan",
    "Shahrukh Khan",
    "Salman Khan",
    "Manna",
  ];

  const books = [
    { id: 1, name: "Physics", price: 100 },
    { id: 1, name: "Math", price: 150 },
    { id: 1, name: "Chemistry", price: 120 },
    { id: 1, name: "Biology", price: 130 },
  ];
  const singers = [
    { id: 1, name: "Dr.Mahfuzur", age: 57 },
    { id: 1, name: "Eva Rahman", age: 38 },
    { id: 1, name: "Shuvro Das", age: 42 },
    { id: 1, name: "Pritom Hasan", age: 30 },
    { id: 1, name: "Hero Alom", age: 37 },
  ];
  return (
    <>
      <Developer></Developer>
      <BookStore books={books}></BookStore>

      
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}


      <Actor name={"Salman Shah"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {/* <Todo task='React JS' isDone= {true}></Todo>
      <Todo task='Core Concepts' isDone={false}></Todo>
      <Todo task='Try JSX' isDone={true}></Todo> */}
      {/* <Device name="laptop" price="10000"></Device>
      <Device name="Mobile" price="5000"></Device>
      <Device name="Monitor" price="20000"></Device>
      <Person></Person>
      <Student name="Shakil Ahmed" subject="CSE" id="01"></Student>
      <Student name="Shakil" subject="CE" id="02"></Student>
      <Student id={10}></Student> */}
    </>
  );
}

function Device(props) {
  console.log(props);
  return (
    <h3>
      Device: {props.name}, Price: {props.price}{" "}
    </h3>
  );
}

function Developer() {
  const devStyle = {
    padding: "20px 50px",
    margin: "20px",
    border: "2px solid tomato",
    borderRadius: "10px",
    backgroundColor: "black",
    color: "green",
  };

  return (
    <div style={devStyle}>
      <h2>Developer</h2>
      <p>Dev Dev</p>
    </div>
  );
}

function Person() {
  const person = { name: "Shakil Ahmed", age: 20 };
  const money = 100;
  return (
    <h3
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "15px",
        margin: "20px",
        fontSize: "20px",
        borderRadius: "10px",
      }}
    >
      I am {person.name}, my age is {person.age}. Total amount of balance on my
      pocket is {money}.{" "}
    </h3>
  );
}

const Student = ({ name = "None", subject = "None", id = "0" }) => {
  // const student = {id: '01', name: 'Shakil Ahmed', subject: 'CSE'}
  return (
    <div className="student">
      <h2>This is a student</h2>
      <p>Name: {name} </p>
      <p>Subject: {subject} </p>
      <p>Id: {id} </p>
    </div>
  );
};
export default App;
