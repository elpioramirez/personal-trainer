import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Typography } from '@material-ui/core/index';
// import Switch from '@material-ui/core/Switch';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = {
    cardStyle: {
        flexDirection: 'row',
        width: 500,
        height: 300,
        marginBottom: 50
    },
    cardContainerStyle: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-around",
        marginTop: 50
    },
    image: {
        flex: 1,
        width: 180,
        height: 180,
    },
    person: {
        flex: 1
    },
    speced: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-between",
    },
    specedAround: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-around",
    },
    chipGreen: {
        color: '#fff',
        backgroundColor: '#5ABA5A',
        marginTop: 5,
        fontSize: 12
    },
    chipRed: {
        color: '#fff',
        backgroundColor: '#DA534F',
        marginTop: 5,
        fontSize: 12
    },
    line: {
        content: '',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        marginHorizontal: 20,
    },
    searchContainer: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center'
    },
    searchInput: {
        width: 400
    },
    searchButton: {
        marginLeft: 10
    },
    floatButton: {
        margin: 0,
        top: 'auto',
        right: 40,
        bottom: 40,
        left: 'auto',
        position: 'fixed',
    },
}

export default class PeopleAdd extends React.Component {
    state = {
        open: false,
        firstname: "TEST",
        lastname: "Jesssstt",
        streetaddress: "test",
        postcode: "123123",
        city: "dallas",
        email: "dalls@g.com",
        phone: "123123",
    };


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };


    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('clucked');
        const newPerson = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            streetaddress: this.state.streetaddress,
            postcode: this.state.postcode,
            city: this.state.city,
            email: this.state.email,
            phone: this.state.phone,
        }
        this.props.handleAddSubmit(newPerson);
        // console.log(newPerson);
        this.handleClear();
    }

    handleClear = () => {
        this.setState({
            open: false,
            firstname: "",
            lastname: "",
            streetaddress: "",
            postcode: "",
            city: "",
            email: "",
            phone: "",
        })
    }


    render() {
        // const { locationList, jobs } = this.props;

        // const locationOptions =
        //     locationList.map((item, index) =>
        //         <MenuItem key={index} value={item.id}>{item.name}</MenuItem>);

        // const jobOptions =
        //     jobs.map((item, index) =>
        //         <MenuItem key={index} value={item.id}>{item.name}</MenuItem>);

        return (
            <div>
                <Button variant="contained" color='primary' onClick={this.handleClickOpen} style={styles.floatButton}>Add Employee</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <DialogTitle id="form-dialog-title">
                            <Typography variant="inherit" color="primary" align='center'>
                                Add a new customer </Typography>
                        </DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="firstname"
                                label="First Name"
                                type="text"
                                fullWidth
                                value={this.state.firstname}
                                onChange={this.handleChange('firstname')}
                            />
                            <TextField
                                margin="dense"
                                id="lastname"
                                label="Last Name"
                                type="text"
                                fullWidth
                                value={this.state.lastname}
                                onChange={this.handleChange('lastname')}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="streetaddress"
                                label="street address"
                                type="text"
                                fullWidth
                                value={this.state.streetaddress}
                                onChange={this.handleChange('streetaddress')}
                            />
                            <TextField
                                margin="dense"
                                id="postcode"
                                label="postcode"
                                type="text"
                                fullWidth
                                value={this.state.postcode}
                                onChange={this.handleChange('postcode')}
                            />
                            <TextField
                                margin="dense"
                                id="city"
                                label="city"
                                type="text"
                                fullWidth
                                value={this.state.city}
                                onChange={this.handleChange('city')}
                            />
                            <TextField
                                margin="dense"
                                id="email"
                                label="E-Mail"
                                type="email"
                                fullWidth
                                value={this.state.email}
                                onChange={this.handleChange('email')}
                            />

                            <TextField
                                margin="dense"
                                id="phone"
                                label="phone"
                                type="text"
                                fullWidth
                                value={this.state.phone}
                                onChange={this.handleChange('phone')}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClear} color="primary">
                                Cancel
            </Button>
                            <Button color="primary"
                                type="submit">
                                Add
            </Button>
                        </DialogActions>
                    </form>
                </Dialog>

            </div>
        );
    }
}
