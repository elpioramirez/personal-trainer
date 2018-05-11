import React, {Component} from 'react';
import {connect} from "react-redux";

import StrapTable from '../Components/BootstrapTable';
import Caption from '../Components/Caption';

class Customers extends Component {
    render() {
        return (
            <div>
                <Caption title="Customers"/>
                <StrapTable customers={this.props.customers}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {customers: state.customer.customers};
};
export default connect(mapStateToProps)(Customers);