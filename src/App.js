import React,{ useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import { createTodo, deleteTodo, readTodos, updateTodo } from "./functions";


const App = () => {

  const [todo, setTodo] = useState({ title: '', content: '' });
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await readTodos();
      setTodos(result)
    }
    fetchData()
  }, [editMode])

  const handleEdit= (todo)=>{
    setTodo(todo)
    setEditMode(todo._id)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if(todo.title === '' || todo.content === ''){
      alert('Campo Vacio')
      return
    }

    if (!editMode ) {
      const result = await createTodo(todo)
      setTodos([...todos, result])
    } else {
      await updateTodo(editMode, todo)
      setEditMode(null)
    }
    setTodo({ title: '', content: '' });
  }

  const removeTodo = async (id) => {
    await deleteTodo(id);
    setEditMode(true)
    setEditMode(false)
  }

  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={onSubmitHandler}>

          <div className="row">

            <div className="input-field col s6">
              <input type="text" id='f' className="validate" value={todo.title} 
                onChange={e => setTodo({ ...todo, title: e.target.value })}/>
                <label for="f">Title</label>
            </div>

            <div className="input-field col s6">
              <input type="text" id='c' className="validate" value={todo.content} 
                onChange={e => setTodo({ ...todo, content: e.target.value })}/>
                 <label for="c">Content</label>
            </div>

          </div>


          <div className="row">
            <button className="waves-effect waves-light btn" style={{width:'100%'}}>{editMode?'UPDATE':'ADD'}</button>
          </div>

        </form>

        {
          !todos ? <Preloader /> : todos.length > 0 
          
            ? <ul className="collection">
              {
                todos.map(todo => (
                  <li key={todo._id} className="collection-item">
                    <div>
                      <h5 >{todo.title}</h5>
                      <h6>{todo.content}

                        <a className="secondary-content">
                          <i className="material-icons" onClick={()=> removeTodo(todo._id)}>delete</i>
                        </a>

                        <a className="secondary-content">
                          <i className="material-icons" onClick={()=>handleEdit(todo)}>edit</i>
                        </a>

                      </h6> 
                    </div>
                  </li>
                ))
              }  
              </ul>

            : <div><h5>Nothing to do</h5></div>
        }

      </div>
    </div>
  );
}

export default App;
