import React, {Component} from 'react';
import {connect} from "react-redux";

import {deleteCustumer, getAllCustomers} from '../actions/index';
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
                    getAllCustomers={this.props.getAllCustomers}/>

            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteCustumer: id => deleteCustumer(id, dispatch),
        getAllCustomers: () => getAllCustomers(dispatch)
    };
};

const mapStateToProps = state => {
    return {customers: state.customer.customers};
};
export default connect(mapStateToProps, mapDispatchToProps)(Customers);