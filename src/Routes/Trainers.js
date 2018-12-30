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
                {!this.props.isReady ? (<Loader />) : (
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
        isReady: state.training.isReady
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllTrainers: () => getAllTrainers(dispatch),
        deleteTraining: id => deleteTraining(id, dispatch),
        getTrainingsById: path => deleteTraining(path, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainers);