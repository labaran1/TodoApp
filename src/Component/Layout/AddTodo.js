import React, { Component } from 'react';

 class AddTodo extends Component {
state = {

    title: ''
}

onSubmit = (e)=>{
    e.preventDefault();
    // alert(this.props.daily[0].title)
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
}


     onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    


    render() {
        return (
          
<form  onSubmit={this.onSubmit} style={{display:'flex'}}>
<input
style={{flex:'10', padding: '5px'}}
type="text"
name="title"
value={this.state.title}
placeholder="Add Todo"
onChange={this.onChange}

/>
{/*  */}
                <input type="submit"
                    value="Add"
                    className="btn"
                    style={{ flex: '1' }}
                   
                  
                />
</form>
            
        )
    }
}


// const btnStyle = {
//     background: '#ff0000',
//     color: '#fff',
//     border: 'none',
//     padding: '5px 9px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     float: 'right'
// }





export default AddTodo;