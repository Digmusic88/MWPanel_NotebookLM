import React from 'react';
import Dashboard from './components/Dashboard.jsx';
import Login from './components/Login.jsx';
import CourseList from './components/CourseList.jsx';
import CategoryList from './components/CategoryList.jsx';
import AssignmentList from './components/AssignmentList.jsx';
import MessageList from './components/MessageList.jsx';

export default function App() {
  return (
    <div>
      <h1>LMS Platform</h1>
      <Login />
      <Dashboard />
      <CourseList />
      <CategoryList />
      <AssignmentList />
      <MessageList />
    </div>
  );
}
