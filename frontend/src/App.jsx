import React from 'react';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import CourseList from './components/CourseList.jsx';

export default function App() {
  return (
    <div>
      <h1>LMS Platform</h1>
      <Login />
      <Dashboard />
      <CourseList />
    </div>
  );
}
