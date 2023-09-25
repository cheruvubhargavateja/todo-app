import { useSelector } from 'react-redux';
import './App.css';
import Register from './components/register/Register';
import TodoForm from './components/todo/TodoForm';

function App() {

  const data = useSelector((state)=>state.authentication)
  console.log(data);
  return (
    <div className="App">
      {!data.isAuthenticated ? <Register /> : <TodoForm />}
    </div>
  );
}

export default App;
