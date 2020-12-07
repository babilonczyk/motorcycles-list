import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";
import { Fragment } from 'react'

const MotorcycleForm = (props) => {
    const [motorcycle, setMotorcycle] = useState(props.motorcycle);
    const [method, setMethod] = useState(props.method);

    function title(method) {
        let title = null;
        if ( method === 'UPDATE' ) {
            return title = (
                <Fragment>
                    <h4>Edit motorcycle</h4>
                </Fragment>
            );
        } else if ( method === 'CREATE' ) {
            return title = (
                <Fragment>
                    <h4>Add new motorcycle</h4>
                </Fragment>
            );
        }
    }

    function submitHandle() {
        if ( method === 'UPDATE' ) {
            props.update(event, motorcycle.id);
        } else if ( method === 'CREATE' ) {
            props.create(event);
        }
    }

    return (
        <form id={"form"} onSubmit={ submitHandle }>

            {title(method)}

            <div className={"form-field"}>
                <input type='text' name='motorcycle[name]' defaultValue={motorcycle.name}/>
            </div>

            <div className={"form-field"}>
                <button type='submit'>Submit</button>
            </div>
        </form>
    );
};

MotorcycleForm.propTypes = {
    motorcycle: PropTypes.object.isRequired,
    method: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        update: (event, id) => dispatch(actions.updateMotorcycle(event, id)),
        create: (event) => dispatch(actions.createMotorcycle(event))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(MotorcycleForm);