import React, { useEffect, useState } from 'react';

export default function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/courses')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch(() => setCourses([]));
  }, []);

  return (
    <section>
      <h2>Cursos</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>{c.title}</li>
        ))}
      </ul>
    </section>
  );
}
