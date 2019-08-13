import React, { Component } from 'react';
import TodoItem from '../Layout/TodoItem';














 class Todos extends Component {
    render() {
        return this.props.daily.map((daily)=>(

<TodoItem  daily={daily}/>

        ))
    }
}




export default Todos