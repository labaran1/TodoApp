// import React from 'react';


//  function Showcase() {
//     return (
//         
//     )
// }

// const time = document.querySelector('#time');
// const greeting = document.querySelector('#greeting');
// const name = document.querySelector('#name');




// export default Showcase;
import React, { Component } from 'react'

 class Showcase extends Component {


// const  showTime = ()=>{
    
//     let today = new Date();
//     hour = today.getHours();
//     min = today.getMinutes();
//     sec = today.getSeconds();
// // set Am or Pm
//     const amPm = hour>=12 ? 'PM' : 'Am';

//     // 12hr format

//     hour = hour % 12 || 12;


// }

     
    render() {
    return (
        <div >

       <div>
         <time sTime={this.showTime} id="time"></time>
         <h1>
         <span id="greeting"></span>         <span id="name" contentEditable="true"></span>
     <span id="name" contenteditable="true"></span>


         </h1>

 <h2> Let help You help you organise your workflow</h2>
         </div>
         <div>
 

         </div>

/         </div>
    )
  }


}



export default Showcase;