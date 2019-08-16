import React, { Component } from 'react';
import TodoItem from '../Layout/TodoItem';
import {withRouter} from 'react-router-dom';
// import Main from '../Layout/Main';
// import Today from '../Pages/Today';
// import Weekly from '../Pages/Week';
// import Monthly from '../Pages/Month';














 class Todos extends Component {
    render() {

//         return this.props.daily.map((daily)=>(

// <TodoItem  daily={daily} markComplete = {this.props.markComplete} delTodo={this.props.delTodo}/>

//         ))



        if (this.props.loc === '/today') {

            return  (this.props.daily.map((daily) => (

                <TodoItem 
                loc={this.props.loc}
                daily={daily}
                 markComplete={this.props.markComplete} 
                 delTodo={this.props.delTodo} />

            ))
            )
           
        }
        else if (this.props.loc === '/week') {

            return this.props.weekly.map((weekly) => (

                <TodoItem 
                    loc={this.props.loc}
                weekly={weekly} 
                markComplete={this.props.markComplete} 
                delTodo={this.props.delTodo} />

            ))


        }
        else {


            return this.props.monthly.map((monthly) => (

                <TodoItem 
                    loc={this.props.loc}
                monthly={monthly} 
                markComplete={this.props.markComplete}
                 delTodo={this.props.delTodo} />

            ))

        }




    }
}




export default withRouter(Todos)