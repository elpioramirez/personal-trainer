import React, { Component } from 'react';
import { connect } from "react-redux";
import TrainingForm from '../Components/TrainingForm';
import Caption from '../Components/Caption';
import { addTraining } from '../actions';

class NewTraining extends Component {
    render() {
        return (
            <div>
                <Caption title="new training" />
                <code>https://customerrest.herokuapp.com/api/customers/</code>
                <TrainingForm
                    // //passes the history object from the Router - needed for page redirection
                    // history={this.props.history}
                    customerList={this.props.customers}
                    onSubmit={this.props.addTraining}
                    history={this.props.history}
                // onSubmit={(e) => console.log(e)}

                />
            </div>
        );
    }
}

const mapStateToProps = state => ({ customers: state.customer.custumers });

export default connect(mapStateToProps, { addTraining })(NewTraining);