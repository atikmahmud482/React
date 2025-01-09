import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Todo from "./todo";
import "./App.css";
import Singer from "./Singer";

function App() {
  const singers = [
    { id: 1, name: "Bappa Majumdar", age: 34 },
    { id: 2, name: "chappa Majumdar", age: 34 },
    { id: 3, name: "kappa Majumdar", age: 34 },
  ];
  return (
    <>
      <h1>Vite + React</h1>
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}

      {/* <Todo task="Learn React"></Todo>
      <Todo task="Nothing"></Todo> */}

      {/* <Person></Person>
      <Student></Student>
      <Device name="Laptop" price="234"></Device>
      <Device name="watch" price="568"></Device>
      <Device name="mobile" price="563"></Device> */}
    </>
  );
}
function Device(props) {
  // console.log(props);
  return (
    <h2>
      This Device:{props.name} ,price:{props.price}
    </h2>
  );
}

function Person() {
  const age = 24;
  const money = 30;
  const person = { name: "atik", age: 24 };
  return (
    <h2>
      Hi, my name is ---{person.name} with age {age + money}
    </h2>
  );
}
function Student() {
  return (
    <div className="student">
      <h3>I am a Student</h3>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  );
}

export default App;
