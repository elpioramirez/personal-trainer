import React from 'react';
import { css } from 'react-emotion';
// First way to import
import { PacmanLoader } from 'react-spinners';
// Another way to import
// import ClipLoader from 'react-spinners/ClipLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class AniLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }


  render() {


    return (
      <div style={{ padding: "10%" }}>
        <PacmanLoader
          className={override}
          sizeUnit={"px"}
          size={150}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

export default AniLoader