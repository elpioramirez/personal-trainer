import React, {Component} from 'react';
import {connect} from "react-redux";

import {deleteCustumer, getAllCustomers, addCustomer, getTrainingsById} from '../actions/index';
import CustomerTable from '../Components/CustomerTable';
import Caption from '../Components/Caption';

class Customers extends Component {

    componentDidMount() {
        this
            .props
            .getAllCustomers();
    }

    render() {

        return (
            <div>
                <Caption title="Customers"/>
                <CustomerTable
                    customers={this.props.customers}
                    deleteCustumer={this.props.deleteCustumer}
                    getAllCustomers={this.props.getAllCustomers}
                    addCustomer={this.props.addCustomer}
                    getTrainingsById={this.props.getTrainingsById}/>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCustumer: id => deleteCustumer(id, dispatch),
        getAllCustomers: () => getAllCustomers(dispatch),
        addCustomer: newCustomer => addCustomer(newCustomer, dispatch),
        getTrainingsById: path => getTrainingsById(path, dispatch)
    };
};

const mapStateToProps = state => {
    return {customers: state.customer.customers};
};
export default connect(mapStateToProps, mapDispatchToProps)(Customers);