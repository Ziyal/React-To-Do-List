import React from 'react';
import ListItem from './list_item';
import { CSSTransitionGroup } from 'react-transition-group';


const List = (props) => {
  const ListItems = props.list_items.map((item) => {
    return <ListItem 
                key={item.description} 
                item={item}
                onCheckboxChange={props.onCheckboxChange}
            />
  })
  return (
    <div className="list-container">
      <ul>
        <CSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {ListItems}
        </CSSTransitionGroup>
      </ul>

    </div>
  );
}

export default List;