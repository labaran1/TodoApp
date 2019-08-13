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

markComplete = (id)=> {
    this.setState({Daily: this.state.Daily.map(daily =>{

        if (daily.id === id) {
            daily.completed = !daily.completed
        }
        return daily;
    })
    })










    }
        
        
        
   




render(){

return (

    <React.Fragment>
            <AddTodo addTodo={this.addTodo} />
            <Todos  daily={this.state.Daily} markComplete={this.markComplete}/>

        </React.Fragment>


)



}

}

export default Today;