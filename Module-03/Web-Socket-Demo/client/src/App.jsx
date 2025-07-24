import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [joined, setJoined] = useState(false);

  const handleSend = () => {
    if (message.trim() && name.trim()) {
      socket.emit('send_message', { name, message });
      setMessage('');
    }
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, []);

  if (!joined) {
    return (
      <div style={{ padding: 20 }}>
        <h2>Enter Your Name to Join</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <button onClick={() => setJoined(true)} disabled={!name.trim()}>
          Join Chat
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Welcome, {name}!</h2>
      <div style={{ border: '1px solid #ccc', padding: 10, height: 250, overflowY: 'auto' }}>
        {chat.map((msg, i) => (
          <div key={i}>
            <strong>{msg.name}: </strong>{msg.message}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        placeholder="Type your message..."
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '70%', marginTop: 10 }}
      />
      <button onClick={handleSend} style={{ marginLeft: 10 }}>
        Send
      </button>
    </div>
  );
}

export default App;
