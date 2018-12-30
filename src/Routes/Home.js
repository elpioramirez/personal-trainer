import React, { Component } from 'react';
import PopUpById from '../Components/PopUpById';
import AniLoader from '../Components/AniLoader';


class Home extends Component {
    render() {
        return (
            <div>
                {/* <Caption title="Home" /> */}
                <PopUpById />
                <AniLoader />
            </div>
        );
    }
}

export default Home;