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

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

-- Update courses with category
ALTER TABLE courses
  ADD COLUMN IF NOT EXISTS category_id INTEGER REFERENCES categories(id);

-- Assignments table
CREATE TABLE IF NOT EXISTS assignments (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES courses(id),
  title TEXT NOT NULL,
  description TEXT,
  due_date DATE
);

-- Messages table
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  sender_id INTEGER REFERENCES users(id),
  recipient_id INTEGER REFERENCES users(id),
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
