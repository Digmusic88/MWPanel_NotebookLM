import React, { useEffect, useState } from 'react';

export default function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/messages')
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch(() => setMessages([]));
  }, []);

  return (
    <section>
      <h2>Mensajes</h2>
      <ul>
        {messages.map((m) => (
          <li key={m.id}>{m.content}</li>
        ))}
      </ul>
    </section>
  );
}
