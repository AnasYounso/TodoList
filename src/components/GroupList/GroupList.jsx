import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './GroupList.css';

const GroupList = ({ list, onRemoveItem }) => {
  function updateNote() {
    document.querySelector('.List__item-text').contentEditable = 'true';
    document.querySelector('.button--hidden').style.display = 'block';
  }

  function handleAccept() {}

  const handleOnRemove = indexTodo => $event => {
    $event.preventDefault();
    onRemoveItem(indexTodo);
  };

  return (
    <ListGroup>
      {list.map((value, index) => (
        <ListGroup.Item key={index} className="list__item">
          <span onClick={updateNote} className="List__item-text">
            {value}
          </span>
          <button onClick={handleAccept} className="button--hidden" />

          <button onClick={handleOnRemove(index)} className="button--delete" />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default GroupList;
