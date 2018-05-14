import React, {Component} from 'react';
import {connect} from "react-redux";
import TrainingForm from '../Components/TrainingForm';
import Caption from '../Components/Caption';
import {addTraining} from '../actions';

class NewTraining extends Component {
    render() {
        return (
            <div>
                <Caption title="new training"/>
                <TrainingForm onSubmit={this.props.addTraining}/>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {
        addTraining: newTraining => addTraining(newTraining, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTraining);