 return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={onSubmitHandler}>

          <div className="row">

            <div className="input-field col s6">
              <input id="icon_prefix" type="text" className="validate" value={todo.title}
                onChange={e => setTodo({ ...todo, title: e.target.value })}/>
            </div>

            <div className="input-field col s6">
              <input id="description" type="text" className="validate" value={todo.content}
                onChange={e => setTodo({ ...todo, content: e.target.value })}/>
            </div>

          </div>


          <div className="row right-align">
            <button className="waves-effect waves-light btn">ADD</button>
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
# MERNtodolist
