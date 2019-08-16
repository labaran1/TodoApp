import React, { Component } from 'react'

 class TodoItem extends Component {

getStyle = ()=> {

    if(this.props.loc==='/today') {
    return {
        background: '#f4f4f4',
        padding: '10px',
        border: ' 1px dotted #ccc',
        textDecoration: this.props.daily.completed ?
            'line-through' : 'none'

    }
    } else if(this.props.loc==='/week'){
        return {
            background: '#f4f4f4',
            padding: '10px',
            border: ' 1px dotted #ccc',
            textDecoration: this.props.weekly.completed ?
                'line-through' : 'none'

        }

    } else{

        return {
            background: '#f4f4f4',
            padding: '10px',
            border: ' 1px dotted #ccc',
            textDecoration: this.props.monthly.completed ?
                'line-through' : 'none'

        }

    }
}







    render() {
 


// const {id, title} = this.props.daily;

if(this.props.loc==='/today'){
        return(
<div style={this.getStyle()}>

<p>

<input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.daily.id)}/>{ ' '}
{ this.props.daily.title}

<button  style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.daily.id)}>X</button>


</p>


</div>


        )
} else if(this.props.loc==='/week'){

    return (
        <div style={this.getStyle()}>

            <p>

                <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.weekly.id)} />{' '}
                {this.props.weekly.title}

                <button style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.weekly.id)}>X</button>


            </p>


        </div>


    )

}else{
    return (
        <div style={this.getStyle()}>

            <p>

                <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.monthly.id)} />{' '}
                {this.props.monthly.title}

                <button style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.monthly.id)}>X</button>


            </p>


        </div>


    )



}

      
    }
}



const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem;