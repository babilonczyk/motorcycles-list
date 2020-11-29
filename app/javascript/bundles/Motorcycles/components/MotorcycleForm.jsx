import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../actions/index";
import { Fragment } from 'react'

const MotorcycleForm = (props) => {
    const [motorcycle, setMotorcycle] = useState(props.motorcycle);
    const [method, setMethod] = useState(props.method);

    let req = null;

    if ( method === 'CREATE' ) {
        req = (
            <Fragment>
                <form onSubmit={ () => props.update(event, motorcycle.id) }>
                    <div>
                        <input type='text' defaultValue={name}/>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </Fragment>
        )
    } else if ( method === 'UPDATE' ) {
        req = (
            <Fragment>
                <form onSubmit={ () => props.create(motorcycle) }>
                    <div>
                        <input type='text' defaultValue={name}/>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </Fragment>
        )
    }

    return (
        req
    );
};

MotorcycleForm.propTypes = {
    motorcycle: PropTypes.object.isRequired,
    method: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => {
    return {
        update: (event, id) => dispatch(actions.updateMotorcycle(event, id)),
        create: (motorcycle) => dispatch(actions.createMotorcycle(motorcycle))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(MotorcycleForm);