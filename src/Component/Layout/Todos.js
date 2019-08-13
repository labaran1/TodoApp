import React, { Component } from 'react';
import TodoItem from '../Layout/TodoItem';














 class Todos extends Component {
    render() {
        return this.props.daily.map((daily)=>(

<TodoItem  daily={daily} markComplete = {this.props.markComplete}/>

        ))
    }
}




export default Todos