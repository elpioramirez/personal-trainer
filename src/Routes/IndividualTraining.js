import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteTraining} from '../actions/index';
import Caption from '../Components/Caption';
import TrainingTableById from '../Components/TrainingTableById';

class IndividualTraining extends Component {
    render() {
        return (
            <div>
                <Caption title="All Trainings from user"/>
                <TrainingTableById
                    individualTraining={this.props.individualTraining}
                    deleteTraining={this.props.deleteTraining}/>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {individualTraining: state.training.trainingById};
};

const mapDispatchToProps = dispatch => {
    return {

        deleteTraining: id => deleteTraining(id, dispatch),
        getTrainingsById: path => deleteTraining(path, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualTraining);