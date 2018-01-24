import React from 'react';

const ListItem = ({item, onCheckboxChange, deleteTask}) => {
    return (
        <li>
                <label className="checkbox-container">
                    <div className={"list-item " + (item.isChecked ? "check" : "uncheck")}>{item.description}</div>
                    
                    <input 
                        type="checkbox" 
                        checked={item.isChecked} 
                        onChange={() => onCheckboxChange(item)}
                    />
                    <span className="checkmark"></span>
                </label>      

            <div className="delete-btn" onClick={() => deleteTask(item)}>X</div>

        </li>

    )
}

export default ListItem;