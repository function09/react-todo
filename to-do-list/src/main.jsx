import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ToDoList from './components/TodoContainer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToDoList/>
  </React.StrictMode>,
)
