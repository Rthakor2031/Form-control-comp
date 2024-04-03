import './App.css'
import Uncontrol from './Uncontrol';
import {useState} from 'react'
function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit() {
    console.log("Name value: " + name);
    console.log("Email value: " + email);
  }
  return (
    <div className='App'>
      <h3>Login</h3>
        <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br/>
      <br/>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br/>
      <br/>
      <input type="submit" value="Submit" />
    </form>

    <h2>Uncontrol component below side</h2>
    <Uncontrol / >
    </div>
  );
}

export default App