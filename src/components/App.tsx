import React, {useState} from 'react';
import './App.css';
import Form from "./Form";

interface form {

}

function App() {

  const [data, setData] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <p>Fill in everyone's contributions</p>
        <Form onComplete={(data:any) => setData(data)} />
      </header>
    </div>
  );
}

export default App;
