import React, { Component } from 'react';
import { connect } from "react-redux";
import Caption from '../Components/Caption';

import { addCustomer } from '../actions';

class NewCustomer extends Component {
    render() {
        return (
            <div>
                <Caption title="Add a new Customer" />

            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};
const mapDispatchToProps = dispatch => ({
    addNewCustomer: (newCustomer) => {
        // add the project
        dispatch(addCustomer(newCustomer));

        // // reset the form after submit
        // dispatch(reset('projectAddForm'));
    }
    // addCustomer: newCustomer => addCustomer(newCustomer, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomer);