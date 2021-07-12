// import use stae for login form from react
import { useState } from 'react';
// import axios
import axios from 'axios';

// projecft Id
const projectID = '8e67d73f-6c6d-46f1-a70c-3ad393607369';

// enter cridentials
const Modal = () => {
  // credentials use state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // error use state
  const [error, setError] = useState('');

  // accepts the event
  const handleSubmit = async (e) => {
    // prevent refresh
    e.preventDefault();

    // authenticate
    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    // asynchronous request
    try {
      // username | password: chatengine: give messages
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      // worked out: log in- reload the page
      window.location.reload();

      // error: try with new credentials
      setError('');
    } catch (err) {
      setError('Incorrect credentials. Try Again!');
    }
  };

  // Input
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          {/* enter username */}
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          {/* enter password */}
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          {/* submit button */}
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        {/* wrong credentials */}
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;
