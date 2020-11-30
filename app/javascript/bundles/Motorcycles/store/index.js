import * as React from "react";
import { createStore, applyMiddleware } from 'redux';
import { reducer } from "../reducers";
import createSagaMiddleware from 'redux-saga'
import root from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();
console.log(sagaMiddleware);

const MotorcycleStore = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(root);

export default MotorcycleStore;
