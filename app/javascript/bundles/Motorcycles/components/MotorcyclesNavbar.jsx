import PropTypes from 'prop-types';
import React, { useState } from 'react';

import logoImg from '../../../../assets/images/logo.png'

const MotorcyclesNavbar = (props) => {
    
    return (
        <nav className={"nav"}>
            <div className={"nav-center"}>
                <a className={"nav-link"} data-method={"GET"} href="/motorcycles">List of motorcycles</a>

                <a data-method={"GET"} href="/motorcycles">
                    <img src={logoImg} alt="logo"/>
                </a>

                <a className={"nav-link"} data-method={"GET"} href="/motorcycles/new">Add motorcycle</a>
            </div>
        </nav>
        
    );
};

export default MotorcyclesNavbar;