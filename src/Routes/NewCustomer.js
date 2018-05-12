import React, {Component} from 'react';
import {connect} from "react-redux";
import Caption from '../Components/Caption';
import CustomerForm from '../Components/CustomerForm';
import {addCustomer} from '../actions';

class NewCustomer extends Component {
    render() {
        return (
            <div>

                <Caption title="Add a new Customer"/>
                <CustomerForm onSubmit={this.props.addCustomer}/>

            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {
        addCustomer: newCustomer => addCustomer(newCustomer, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomer);