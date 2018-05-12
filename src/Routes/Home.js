import React, {Component} from 'react';
import Caption from '../Components/Caption';
import PopUpById from '../Components/PopUpById';

class Home extends Component {
    render() {
        return (
            <div>
                <Caption title="Home"/>
                <PopUpById/>

            </div>
        );
    }
}

export default Home;