import React from 'react';
import ListItem from './list_item';

const List = (props) => {
  const ListItems = props.list_items.map((item) => {
    return <ListItem key={item.description} item={item}/>
  })
  return (
    <div className="list-container">
      <ul>
        {ListItems}
      </ul>

    </div>
  );
}

export default List;