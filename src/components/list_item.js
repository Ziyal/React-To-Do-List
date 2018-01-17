import React from 'react';

const ListItem = ({item, onCheckboxChange}) => {
    return (
        <li>
            {/*<div className="checkbox">*/}
                <input 
                    type="checkbox" 
                    checked={item.isChecked} 
                    onChange={() => onCheckboxChange(item)}
                />
            {/*</div>*/}

            <div className={"list-item " + (item.isChecked ? "check" : "uncheck")}>{item.description}</div>

            <div className="delete-btn">X</div>

        </li>

    )
}

export default ListItem;