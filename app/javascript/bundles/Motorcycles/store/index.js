import * as React from "react";
import { createStore, applyMiddleware } from 'redux';
import { reducer } from "../reducers";

const MotorcycleStore = createStore(reducer, []);

export default MotorcycleStore;

