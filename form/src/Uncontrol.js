import {useState} from 'react'
function Uncontrol() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    function onSubmit() {
      console.warn("Name value: " + name);
      console.warn("Email value: " + email);
    }
    return (
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="name"
          placeholder='Enter mail'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br/>
      <br/>
        <input
          type="password"
          name="email"
          placeholder='Enter password'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/>
      <br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
  export default Uncontrol;