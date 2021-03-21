import React, { Component  } from "react";

export  class TodoCreator extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {  newItem : " " }
    }


    updateNewItemValue =(event) =>
    {
        this.setState({newItem : event.target.value})
    }

    createNewTodo =() =>
    {
        //passing data from child to parent Component 
        this.props.callback(this.state.newItem);


        this.setState({ newItem : " "})
      
    }

    render =() =>
    <div className="my-1 text-center">
         <input 
                    className="form-control" 
                    value={this.state.newItem} 
                    onChange={this.updateNewItemValue} />
                    
                    <button className="btn btn-warning my-1  " onClick={this.createNewTodo} > 
                    Add Tasks  
                    </button>
    </div>


}