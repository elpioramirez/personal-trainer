import React, { Component } from 'react';
import { connect } from "react-redux";

import { deleteCustumer, getAllCustomers, addCustomer, getTrainingsById } from '../actions/index';
import CustomerTable from '../Components/CustomerTable';
import Caption from '../Components/Caption';
import PopUpById from '../Components/PopUpById';
import Loader from '../Components/Loader';

class Customers extends Component {

    componentDidMount() {
        this
            .props
            .getAllCustomers();
    }

    render() {

        return (
            <div>
                <PopUpById />
                <Caption title="Customers" />
                {this.props.isLoading ? (<Loader />) : (
                    <CustomerTable
                        customers={this.props.customers}
                        deleteCustumer={this.props.deleteCustumer}
                        getAllCustomers={this.props.getAllCustomers}
                        addCustomer={this.props.addCustomer}
                        getTrainingsById={this.props.getTrainingsById}
                    />
                )}



            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customer.customers,
        isLoading: state.customer.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {

        addCustomer: newCustomer => {
            dispatch(addCustomer(newCustomer))
        },
        getAllCustomers: () => dispatch(getAllCustomers()),
        deleteCustumer: id => {
            dispatch(deleteCustumer(id))
        },
        getTrainingsById: path => getTrainingsById(path, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Customers);