// import chatengine.io
import { ChatEngine } from 'react-chat-engine';

// import Chat Feed
import ChatFeed from './components/ChatFeed';

// import Login Form
import LoginForm from './components/LoginForm';

// Custom CSS
import './App.css';

// import images for LeftNav
import Activity from './images/Activity.svg';
import Calendar from './images/Calendar.svg';
import ChatActive from './images/ChatActiveIcon.svg';

// unique project id
const projectID = '8e67d73f-6c6d-46f1-a70c-3ad393607369';

// React App
const App = () => {
  // Login Form for entry
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (<div style={{ display: "flex" }}>
    {/* Left Navigation bar */}
    <LeftNav />
    {/* div that contains the Search bar & Chat Engine*/}
    <div style={{ flexGrow: 1 }}>
      <SearchIcon />
      <ChatEngine
        height="91vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        // Chat Feed
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        // generate sound on new message
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  </div>
  );
};

// LeftNav element
const LeftNav = () => (
  <nav>
    <ul className="nav">
      <li className="spacer">
      </li>
      {/* Activity */}
      <li>
        <a href="#"><img style={{ margin: "10px" }} src={Activity} width="25px"></img></a>
      </li>
      {/* Active nav-item: Chat */}
      <li>
        <a href="#"><img style={{ margin: "3px" }} src={ChatActive} width="32px"></img></a>
      </li>
      {/* Calendar */}
      <li>
        <a href="#"><img style={{ margin: "9px" }} src={Calendar} width="30px"></img></a>
      </li>
    </ul>
  </nav>
)

// Search bar element 
const SearchIcon = () => {
  return (
    <form className="form-inline">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
    </form>
  )
}

export default App;
