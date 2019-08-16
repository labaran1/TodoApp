import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import Main from '../Layout/Main';




class Week extends Component {



    render() {

        return (

            <React.Fragment>
                {/* <AddTodo addTodo={this.props.addTodo} />
            <Todos  daily={this.props.Daily} markComplete={this.props.markComplete} delTodo={this.props.delTodo} /> */}
                <Main
                    loc1={this.props.location.pathname}
                    addTodo={this.props.AddTodo}

                    weekly={this.props.weekly}
                    markComplete={this.props.markComplete}
                    delTodo={this.props.delTodo}

                />
            </React.Fragment>


        )



    }

}

export default withRouter(Week);