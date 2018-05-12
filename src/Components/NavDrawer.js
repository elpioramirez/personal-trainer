import React from 'react';

import {Link} from 'react-router-dom'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import MenuList from 'material-ui/MenuList'; import RaisedButton from
// 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

export default class NavDrawer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleToggle = () => this.setState({
        open: !this.state.open
    });

    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <AppBar
                    title="Jose's Gym"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onClick={this.handleToggle}/>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    <MenuItem containerElement={< Link to = "/home" />}>Home</MenuItem>
                    <MenuItem containerElement={< Link to = "/customers" />}>Customers</MenuItem>
                    <MenuItem containerElement={< Link to = "/trainers" />}>Trainings</MenuItem>
                    <MenuItem
                        primaryText="Add A customer"
                        containerElement={< Link to = "/NewCustomer" />}/> {/* // <Link to="/customers">Customers</Link>
                    // // // //
                    // <Link to="/trainers">Trainers</Link>
                    // // // //
                    // <Link to="/calendar">Calendar</Link>
                    // // // //
                    // <Link to="/addCustomer">Add a Customer</Link> */}
                </Drawer>
            </div>
        );
    }
}