import React from 'react';
import './App.css';


function Name(props) {

  return (
    <span className="nameclass">
      {props.text}
    </span>
  )
}

function Lastname(props) {

  return (
    <span className="lastnameclass">
      {props.text}
    </span>
  )
}


function Age(props) {
  return (
    <p>
      I am  {props.text} years old
    </p>


  )
}










function App() {

  return (
    <div className="App">


      <h3>Hello, I am</h3>
      <Name text="Ann" />
      <Lastname text="Doe" />
      <Age text="25" />
      <hr />

      <h3>Hello, I am</h3>
      <Name text="John" />
      <Lastname text="Bell" />
      <Age text="35" />
      <hr />

      <h3>Hello, I am</h3>
      <Name text="Alex" />
      <Lastname text="Harris" />
      <Age text="17" />






    </div>
  );
}

export default App;
