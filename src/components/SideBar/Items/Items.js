import React from 'react';

import Item from './Item/Item';

const Items = (props) => (
    props.items.map((item, index) => (
        <Item 
            key={index} 
            name={item.name}
            link={item.link} />
    ))
);

export default Items;