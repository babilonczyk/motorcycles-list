import PropTypes from 'prop-types';
import React, { useState } from 'react';

const MotorcyclesNavbar = (props) => {
    
    return (
        <nav>
            <a data-method={"GET"} href="/motorcycles">List of motorcycles</a>
            <a data-method={"GET"} href="/motorcycles/new">Add motorcycle</a>
        </nav>
        
    );
};

export default MotorcyclesNavbar;