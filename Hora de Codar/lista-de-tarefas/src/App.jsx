import { useState } from 'react'
import { Todo } from './components/Todo';
import { TodoForm } from './components/Todoform'
import './App.css'

function App() {
  const[todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    }
  ]);

  const addTodo = function(text, category) {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false
    }]
    setTodos(newTodos)
  }

  const removeTodo = function (id) {
    const newTodos = [...todos]
    const filteredTodo = newTodos.filter((todo) => todo.id !== id ? todo : null);
    setTodos(filteredTodo)
  }


  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} removeTodo={removeTodo}/>  
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
