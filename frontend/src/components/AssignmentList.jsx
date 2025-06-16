import React, { useEffect, useState } from 'react';

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/assignments')
      .then((res) => res.json())
      .then((data) => setAssignments(data))
      .catch(() => setAssignments([]));
  }, []);

  return (
    <section>
      <h2>Tareas</h2>
      <ul>
        {assignments.map((a) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>
    </section>
  );
}
