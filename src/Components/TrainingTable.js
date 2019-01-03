import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as moment from 'moment';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { indigo500 } from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ActionHome from 'material-ui/svg-icons/action/home';

export default class TrainingTable extends Component {
    render() {
        const columns = [
            {
                Header: "date",
                accessor: "date",
                Cell: ({ value }) => (
                    <span>{moment(value).format('MMMM Do YYYY')}</span>
                )
            }, {
                Header: "time",
                accessor: "date",
                Cell: ({ value }) => (
                    <span>{moment(value)
                        .endOf('day')
                        .fromNow()}</span>
                )

            }, {
                Header: "activity",
                accessor: "activity"
            }, {
                Header: "customer",
                accessor: "customer.firstname"
            }, {
                Header: "delete",
                accessor: "id",
                filterable: false,
                sortable: false,
                Cell: ({ value }) => (
                    <button
                        onClick={() => {
                            this
                                .props
                                .deleteTraining(value)
                        }}>delete</button>
                )
            }, {
                Header: "customer",
                accessor: "customer",
                filterable: false,
                sortable: false,
                Cell: ({ value }) => (
                    <Card>
                        <CardHeader
                            title={value.firstname}
                            subtitle={value.lastname}
                            actAsExpander={true}
                            showExpandableButton={true} />

                        <CardText expandable={true}>

                            <List>
                                <ListItem
                                    leftIcon={< CommunicationCall color={
                                        indigo500
                                    } />}
                                    rightIcon={< CommunicationChatBubble />}
                                    primaryText={value.phone}
                                    secondaryText="Mobile" />
                                <ListItem
                                    leftIcon={< CommunicationEmail color={
                                        indigo500
                                    } />}
                                    primaryText={value.email}
                                    secondaryText="Personal" />

                            </List>
                            <Divider inset={true} />
                            <List>
                                <ListItem
                                    leftIcon={< ActionHome color={
                                        indigo500
                                    } />}
                                    insetChildren={true}
                                    primaryText={value.streetaddress}
                                    secondaryText={value.city} /></List>

                        </CardText>
                    </Card>
                )
            }
        ];
        return (
            <div>
                <ReactTable
                    data={this.props.trainings}
                    columns={columns}
                    defaultPageSize={30}
                    filterable={true} />
            </div>
        );
    }
}
