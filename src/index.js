import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";


const MyApp = () => (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
