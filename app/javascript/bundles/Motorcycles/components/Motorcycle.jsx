import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";

const Motorcycle = (props) => {
    const [index, setIndex] = useState(props.index);
    const [name, setName] = useState(props["name"]);
    const [link_edit, setLinkEdit] = useState(props.link_edit);

    return (
        <tr className={"list-item"}>
            <td> {index} </td>
            <td> {name} </td>
            <td> <a data-confirm="Are you sure?" onClick={() => props.delete(index)}> delete </a> </td>
            <td> <a href={ link_edit }> edit </a> </td>
        </tr>


    );
};

Motorcycle.propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    link_edit: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        delete: (index) => dispatch(actions.deleteMotorcycle(index)),
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Motorcycle);