import React , {Component } from 'react';
import './App.css';
import Header from './Component/Layout/Header';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Today from './Component/Pages/Today';
import Week from './Component/Pages/Week';
import Month from './Component/Pages/Month';
import Showcase from './Component/Layout/Showcase';
import AddTodo from './Component/Layout/AddTodo';

class App extends Component {

// state = {
// daily:[],
// weekly: [],
// monthly: []


// }





  
render(){

return(
  <Router>
<Header/>
{/* HOme View  */}
<Route exact path ="/"  render={props=>(
  <React.Fragment>

<Showcase/>


  </React.Fragment>
  
  
  
  
)}/>

{/* Today View  */}
<Route path="/today" component={Today}
/>

{/* Weeakly View */}

<Route path="/week" component={Week}/>

{/* Monthly View */}
    <Route path="/month" component={Month} />






  </Router>

)












}








}





export default App;
