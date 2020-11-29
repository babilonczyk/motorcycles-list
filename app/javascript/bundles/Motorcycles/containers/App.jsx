import React from 'react';
import { Provider } from 'react-redux';
import Store from '../store/index';
import MotorcyclesList from '../components/MotorcyclesList';

const App = ( props ) => (

    <Provider store={Store}>
        <MotorcyclesList motorcycles={props.motorcycles}/>
    </Provider>
);

export default App;