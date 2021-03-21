import React, { Component } from 'react';

export  class TodoBanner extends Component
{
    render =() => 

    <h4 className="bg-primary text-center text-white p-3">
            { this.props.name }, you have 
            ({ this.props.tasks.filter(t=> !t.done ).length }) tasks to complete
    </h4>
}