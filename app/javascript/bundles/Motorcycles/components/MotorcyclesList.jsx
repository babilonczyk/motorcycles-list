import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";
import Motorcycle from './Motorcycle';

const MotorcyclesList = (props) => {
    const [motorcycles, setMotorcycles] = useState(props.motorcycles);

    const arr = [];

    for (let i = 0; i < motorcycles.length; i ++) {
        arr.push(< Motorcycle key={motorcycles[i].id} index={motorcycles[i].id} name={motorcycles[i].name} link_delete={"/motorcycles/" + motorcycles[i].id} link_edit={"/motorcycles/" + motorcycles[i].id + "/edit" } />)
    }

    return (
        <table id={"list"}>
            <thead>
                <tr className={"list-item"}>
                    <th>#</th>
                    <th>motorcycle name</th>
                    <th>delete</th>
                    <th>edit</th>
                </tr>
            </thead>

            <tbody>
                {arr}
            </tbody>
        </table>
    );
};

MotorcyclesList.propTypes = {
    motorcycles: PropTypes.array.isRequired,
};

export default MotorcyclesList;