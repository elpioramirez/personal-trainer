import React, {Component} from 'react';
import {connect} from "react-redux";
import {getAllTrainers, deleteTraining} from '../actions/index';
import Caption from '../Components/Caption';
import TrainingTable from '../Components/TrainingTable';
import PopUpById from '../Components/PopUpById';

class Trainers extends Component {
    // componentDidMount() {     this         .props         .getAllTrainers(); }

    render() {
        return (
            <div>
                <Caption title="All Trainings"/>
                <TrainingTable
                    trainings={this.props.trainings}
                    deleteTraining={this.props.deleteTraining}
                    getAllTrainers={this.props.getAllTrainers}/>
                <PopUpById/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {trainings: state.training.trainers};
};

const mapDispatchToProps = dispatch => {
    return {

        getAllTrainers: () => getAllTrainers(dispatch),
        deleteTraining: id => deleteTraining(id, dispatch),
        getTrainingsById: path => deleteTraining(path, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainers);