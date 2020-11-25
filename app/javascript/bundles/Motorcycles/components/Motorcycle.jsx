import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Motorcycle = (props) => {
    const [index, setIndex] = useState(props.index);
    const [name, setName] = useState(props.name);
    const [link_delete, setLinkDelete] = useState(props.link_delete);
    const [link_edit, setLinkEdit] = useState(props.link_edit);

    return (
        <tr>
            <td> {index} </td>
            <td> {name} </td>
            <td> <a data-confirm="Are you sure?" data-method="DELETE" href={link_delete}> delete </a> </td>
            <td> <a data-method="GET" href={link_edit}> edit </a> </td>
        </tr>
    );
};

Motorcycle.propTypes = {
    index: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link_delete: PropTypes.string.isRequired,
    link_edit: PropTypes.string.isRequired,
};

export default Motorcycle;
