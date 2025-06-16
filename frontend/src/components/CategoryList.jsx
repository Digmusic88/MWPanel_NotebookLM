import React, { useEffect, useState } from 'react';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/categories')
      .then((res) => res.json())
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  return (
    <section>
      <h2>Categorías</h2>
      <ul>
        {categories.map((c) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </section>
  );
}
