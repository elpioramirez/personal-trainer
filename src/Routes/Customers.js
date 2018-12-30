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
                {!this.props.isReady ? (<Loader />) : (
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

const mapDispatchToProps = dispatch => {
    return {
        deleteCustumer: id => deleteCustumer(id, dispatch),
        getAllCustomers: () => getAllCustomers(dispatch),
        addCustomer: newCustomer => addCustomer(newCustomer, dispatch),
        getTrainingsById: path => getTrainingsById(path, dispatch)
    };
};

const mapStateToProps = state => {
    return {
        customers: state.customer.customers,
        isReady: state.customer.isReady
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Customers);