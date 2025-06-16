import React, { useEffect, useState } from 'react';

export default function AssignmentList({ courseId }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/assignments')
      .then((res) => res.json())
      .then((data) => {
        if (courseId) {
          setItems(data.filter((a) => a.course_id === courseId));
        } else {
          setItems(data);
        }
      })
      .catch(() => setItems([]));
  }, [courseId]);

  return (
    <section>
      <h2>Asignaciones</h2>
      <ul>
        {items.map((a) => (
          <li key={a.id}>{a.title} - {a.due_date}</li>
        ))}
      </ul>
    </section>
  );
}
