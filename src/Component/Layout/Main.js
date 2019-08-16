import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todos from './Todos';



 class Main extends Component {
     state = {

         Daily: [
            //  {
            //      id: 1,
            //      completed: false,
            //      title: 'Go to Gym'
            //  },
            //  {
            //      id: 2,
            //      completed: false,
            //      title: 'Swim'
            //  }
         ],
         Weekly: [
            //  {
            //      id:1,
            //      completed: false,
            //      title: 'Sleep'
            //  }
         ],
         Monthly:[
            //  {
            //      id: 1,
            //      completed: false,
            //      title: 'Sleep'
            //  }

         ]
     }


     addTodo = (title) => {
         const newTodo = {
             id: this.state.Daily.length + 1,
             title,
             completed: false
         }

         if(this.props.loc ==='/today')
         {

             this.setState({ Daily: [...this.state.Daily, newTodo] });
         }
         else if(this.props.loc=== '/week')
         {
             this.setState({ Weekly: [...this.state.Weekly, newTodo] });


         }
else{

             this.setState({ Monthly: [...this.state.Monthly, newTodo] })

}



     }


     markComplete = (id) => {
  
         if (this.props.loc === '/today') {

             this.setState({
                 Daily: this.state.Daily.map(daily => {

                     if (daily.id === id) {
                         daily.completed = !daily.completed
                     }
                     return daily;
                 })
             })
         }

         else if (this.props.loc === '/week') {
             this.setState({
                 Weekly: this.state.Weekly.map(weekly => {

                     if (weekly.id === id) {
                         weekly.completed = !weekly.completed
                     }
                     return weekly;
                 })
             })


         }
         else {

             this.setState({
                 Monthly: this.state.Monthly.map(monthly => {

                     if (monthly.id === id) {
                         monthly.completed = !monthly.completed
                     }
                     return monthly;
                 })
             })

         }





     }



     delTodo = (id) => {

        //  this.setState({ Daily: [...this.state.Daily.filter(daily => daily.id !== id)] })
         if (this.props.loc === '/today') {

             this.setState({ Daily: [...this.state.Daily.filter(daily => daily.id !== id)] })

         }
         else if (this.props.loc === '/week') {

             this.setState({ Weekly: [...this.state.Weekly.filter(weekly => weekly.id !== id)] })


         }
         else {


             this.setState({ Monthly: [...this.state.Monthly.filter(monthly => monthly.id !== id)] })

         }


     }

















    render() {
        return (
            <React.Fragment>
                
<AddTodo addTodo = {this.addTodo}/>
<Todos
 daily={this.state.Daily}
 loc={this.props.loc} 
 loc1={this.props.loc1}
 loc2={this.props.loc2}
weekly={this.state.Weekly} 
monthly={this.state.Monthly} markComplete={this.markComplete} 
delTodo={this.delTodo} />

                
            </React.Fragment>
        )
    }
}


export default Main;