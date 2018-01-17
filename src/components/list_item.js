import React from 'react';

const ListItem = ({item, onCheckboxChange, deleteTask}) => {
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

            <div className="delete-btn" onClick={() => deleteTask(item)}>X</div>

        </li>

    )
}

export default ListItem;