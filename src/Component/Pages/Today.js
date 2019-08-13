import React , { Component} from 'react';
import AddTodo from '../Layout/AddTodo';
import Todos from '../Layout/Todos';




class Today extends Component {

state = {

    Daily: [
        {id:1,
        completed:false,
    title: 'Go to Gym'},
    {
        id: 2,
        completed : false,
        title: 'Swim'
    }
    ]
}


addTodo = (title)=>{
    const newTodo = {
        id: this.state.Daily.length + 1,
        title,
        completed: false
    }

    this.setState({Daily:[...this.state.Daily , newTodo]});



}



render(){

return (

    <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <Todos  daily={this.state.Daily}/>

        </React.Fragment>


)



}

}

export default Today;