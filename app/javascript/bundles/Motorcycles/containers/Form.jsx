import React from 'react';
import { Provider } from 'react-redux';
import Store from '../store/index';
import MotorcycleForm from '../components/MotorcycleForm'

const Form = ( props ) => (

    <Provider store={Store}>
        <MotorcycleForm motorcycle={props.motorcycle} method={props.method} />
    </Provider>
);

export default Form;