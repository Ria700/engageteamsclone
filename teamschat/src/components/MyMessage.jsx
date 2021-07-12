// My message
const MyMessage = ({ message }) => {
  // attachment
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    );
  }

  return (
    // text message
    <div className="message" style={{ float: 'right', marginRight: '18px', color: 'black', backgroundColor: '#E9EAF6' }}>
      {message.text}
    </div>
  );
};

export default MyMessage;
