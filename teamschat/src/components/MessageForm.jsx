// import use State from react
import { useState } from 'react';
// import some functions react chat engine
import { sendMessage, isTyping } from 'react-chat-engine';
// import icons (for send & attachment)
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
// import icon for video call
import VC from './Video.svg';

// Props
const MessageForm = (props) => {
  const [value, setValue] = useState(''); // initial value of message is an empty string
  const { chatId, creds } = props; // destructure props

  // handling change
  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    // to prevent browser refresh
    event.preventDefault();

    // removes the leading and trailing white space and line terminator characters from a string
    const text = value.trim();

    if (text.length > 0) {
      // send message if text length is greater than 0
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  // handles event of uploading image
  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  // Input form
  return (
    // Type message here
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {/* Video chat option */}
      <a target="_blank" rel="noreferrer" className="video" href="https://clonemsteams.herokuapp.com/"><img src={VC} width="18px"></img></a>
      {/* Attachment option */}
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      {/* Send message option */}
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default MessageForm;
