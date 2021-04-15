import React, { useContext } from 'react'
import todoAppContext from '../todoAppContext';

export default function ToDoItem({ item }) {

  const { dispatch } = useContext(todoAppContext);   // giải thích xem cái todoAppContext này là gì ?
  // nơi chứa dữ liệu chung. 

  const btnDeleteItem_Clicked = function () {
    dispatch({
      type: 'finish_task',
      payload: {
        id: item.id
      }
    });
  }

  return (
    <li className={item.complete ? 'done' : ''}>
      {/* {///} */}
      {item.title}
      {!item.complete && <button onClick={btnDeleteItem_Clicked}>Delete</button>}
    </li>
  )
}
