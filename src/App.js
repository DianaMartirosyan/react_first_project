import React from 'react';
import './App.css';
import Name from './name';
import Lastname from './Lastname';




function App() {

  return (
    <div className="App">
       <h4>Hello, I am</h4>
      <Name text="John" />
      <Lastname text = "Doe"/>
      <div>
      <h4>Hello, I am</h4>
      <Name text = "Alex" />
      <Lastname text = "Smith"/>
      </div>
     
      

    </div>
  );
}







export default App;
