import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';
import Main from '../Layout/Main';




class Month extends Component {


    render() {

        return (

            <React.Fragment>
            <Main
                    loc2={this.props.location.pathname}
                    addTodo={this.props.addTodo}

                    monthly={this.props.monthly}
                    markComplete={this.props.markComplete}
                    delTodo={this.props.delTodo}

                />
            </React.Fragment>


        )



    }

}

export default withRouter(Month);