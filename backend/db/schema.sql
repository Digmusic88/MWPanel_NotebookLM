-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

-- Enrollments table (users-courses many-to-many)
CREATE TABLE IF NOT EXISTS enrollments (
  user_id INTEGER REFERENCES users(id),
  course_id INTEGER REFERENCES courses(id),
  PRIMARY KEY (user_id, course_id)
);
