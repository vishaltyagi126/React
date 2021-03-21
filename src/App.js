import React , {Component } from 'react';
import {TodoCreator} from './TodoCreator';
import {TodoRow} from './TodoRow';
import {TodoBanner} from './TodoBanner';
import {  VisibilityControl } from './VisibilityControl';


class App extends Component 
  {
      constructor(props)
      {
        super(props);
        this.state ={
          userName : "Vishal",
          todoItems : [{action:'Shopping', done: false}, {action:'Workout', done: false}, 
                        {action:'Study', done:false}],
          showCompleted : true
        }
        
      }


      render()
      {
        return (
                <div>
                     
                      <TodoBanner name={ this.state.userName } To Do List  
                     tasks={this.state.todoItems  } itmes   /> 
                <div className="container-fluid">
                    <TodoCreator callback={this.createNewTodo} />
                  <table className="table table-striped table-bordered">
                        <thead>
                          <tr>
                            <td>Description</td>
                            <td>Status</td>
                          </tr>
                        </thead>
                        <tbody>  {this.todoTableRows(false) }    </tbody>
                  </table>

                  <div className="bg-secondary text-white text-center p-2">
                    <VisibilityControl   desc =" Completed Tasks "
                                         isChecked = { this.state.showCompleted}
                                         callback = { (checked) => 
                                          this.setState({ showCompleted : checked })}
                    />

                  </div>
                                            
                  {
                    this.state.showCompleted && 
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <td>Description</td>
                          <td>Done</td>
                        </tr>
                      </thead>
                      <tbody>  {this.todoTableRows(true) }    </tbody>
                    </table>
                  }
                </div>
                </div>
            
              );
      }

      changeState = () => {
          this.setState({userName: this.state.userName === 'Vishal' ? 'Rahul' : 'Vishal' })
      }

      // Recieve Task from Child Component 
      createNewTodo =( task ) =>
      {
        if(!this.state.todoItems.find(item => item.action === task))
        {
          this.setState({
            todoItems: [...this.state.todoItems, {action: task, done : false}]
          })
        }
      }

      updateNewItemValue =(event) =>
      {
          this.setState({newItem : event.target.value})
      }
      
      toggeltodo = (todo) => 
             this.setState( {todoItems: this.state.todoItems.map(item=>
                      item.action === todo.action ? { ...item, done: !item.done  }   : item) });
                        
        todoTableRows = (doneValues ) => 
                  this.state.todoItems
                  .filter( t=> t.done === doneValues)
                  .map(item => <TodoRow key={item.action} 
                                        item={item} 
                                        callback={this.toggeltodo}  /> );    
  }

export default App;