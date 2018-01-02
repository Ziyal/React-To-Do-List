import React from 'react';

const ListItem = ({item}) => {
    return (
        <li>{item.description}
            <input type="checkbox" />

        </li>

    )
}

export default ListItem;