import React, { useState, useContext } from 'react'
import todoAppContext from '../todoAppContext';

export default function AddTask({ initValue }) {
  const { dispatch } = useContext(todoAppContext);
  const [item, setItem] = useState(initValue);

  const txtItemTitle_Changed = function (e) {
    ///(e.target.value);
    setItem(e.target.value);
  }

  const btnAdd_Clicked = function () {
    const newItem = {
      id: Math.floor(Math.random() * 100) + 10,
      title: item,
      complete: false
    };

    dispatch({
      type: 'add_item',
      payload: newItem
    });
    setItem(initValue);

  }

  const txtItemTitle_KeyUp = function (e) {
    if (e.keyCode === 13) {
      btnAdd_Clicked();
    }
  }

  return (
    <div>
      <h3>Add Task</h3>
      <div className="fg">
        <input type="text" value={item} onChange={txtItemTitle_Changed} onKeyUp={txtItemTitle_KeyUp} />
        <button onClick={btnAdd_Clicked}>Add</button>
      </div>
    </div>
  )
}
