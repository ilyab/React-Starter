import React from 'react';
import {NavLink} from 'react-router-dom';

const Item = (props) => (
    <NavLink 
        to={props.link}
        exact >
        {props.name}</NavLink>
);

export default Item;