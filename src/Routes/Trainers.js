import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAllTrainers, deleteTraining } from '../actions/index';
import Caption from '../Components/Caption';
import TrainingTable from '../Components/TrainingTable';
import Loader from '../Components/Loader';

class Trainers extends Component {
    componentDidMount() { this.props.getAllTrainers(); }

    render() {
        return (
            <div>
                <Caption title="All Trainings" />
                {this.props.isLoading ? (<Loader />) : (
                    <TrainingTable
                        trainings={this.props.trainings}
                        deleteTraining={this.props.deleteTraining}
                        getAllTrainers={this.props.getAllTrainers} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        trainings: state.training.trainers,
        isLoading: state.training.isLoading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllTrainers: () => { dispatch(getAllTrainers()) },
        deleteTraining: id => { dispatch(deleteTraining(id)) }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainers);