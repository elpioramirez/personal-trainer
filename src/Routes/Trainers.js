import React, {Component} from 'react';
import {connect} from "react-redux";
import Caption from '../Components/Caption';
import TrainingTable from '../Components/TrainingTable';

class Trainers extends Component {
    render() {
        return (
            <div>
                <Caption title="All Trainings"/>
                <TrainingTable trainings={this.props.trainings}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {trainings: state.training.trainers};
};

export default connect(mapStateToProps)(Trainers);