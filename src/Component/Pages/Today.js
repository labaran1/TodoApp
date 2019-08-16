import React , { Component} from 'react';

import {withRouter} from 'react-router-dom';
import Main from '../Layout/Main';




class Today extends Component {

// state= {
//     Daily: [
//         {
//             id: 1,
//             completed: false,
//             title: 'Go to Gym'
//         },
//         {
//             id: 2,
//             completed: false,
//             title: 'Swim'
//         }
//     ],
// }


// addTodo = (title)=>{
//     const newTodo = {
//         id: this.state.Daily.length + 1,
//         title,
//         completed: false
//     }

//     this.setState({Daily:[...this.state.Daily , newTodo]});



// }

// markComplete = (id)=> {
//     this.setState({Daily: this.state.Daily.map(daily =>{

//         if (daily.id === id) {
//             daily.completed = !daily.completed
//         }
//         return daily;
//     })
//     })










//     }
        
        
        
   

// delTodo= (id)=>{

//     this.setState({Daily: [...this.state.Daily.filter(daily=> daily.id !==id)]})
// }


render(){

return (

    <React.Fragment>
            {/* <AddTodo addTodo={this.props.addTodo} />
            <Todos  daily={this.props.Daily} markComplete={this.props.markComplete} delTodo={this.props.delTodo} /> */}
<Main 
loc={this.props.location.pathname}
addTodo={this.props.addTodo} 

daily={this.props.daily} 
markComplete={this.props.markComplete} 
delTodo={this.props.delTodo} 

/>
        </React.Fragment>


)



}

}

export default withRouter(Today);