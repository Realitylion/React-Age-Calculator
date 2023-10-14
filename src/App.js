import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);
  const calculateAge = (e) => {
    e.preventDefault();
    const dateOfBirthInput = document.getElementById("dateInput");
    if (dateOfBirthInput.value === "") {
      alert("Please enter your date of birth");
      return;
    }
    const dateOfBirth = dateOfBirthInput.value;
    const date = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    const monthDifference = today.getMonth() - date.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < date.getDate())) {
      age--;
    }
    setAge(age);
    document.getElementById("output").hidden = false;
  }

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h5>Enter your date of birth</h5>
      <input id="dateInput" type="date" /><br />
      <button className="btn btn-primary" onClick={(e) => {calculateAge(e)}}>Calculate Age</button>      
      <p id="output" hidden><b>You are {age} years old</b></p>
    </div>
  );
}

export default App;
