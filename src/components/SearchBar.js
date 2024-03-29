import React, { useState, useEffect, useContext } from 'react'
import todoAppContext from '../todoAppContext';

export default function SearchBar({ initQuery }) {

  const { dispatch } = useContext(todoAppContext);
  const [term, setTerm] = useState(initQuery);

  useEffect(function () {
    dispatch({
      type: 'update_query',
      payload: {
          query: term
      }
    });
  }, [term, dispatch]);   // giải thích ý nghĩa của việc gắn thêm [term, dispatch] ? 
  // theo dõi sự thay đổi nếu có của term 
  // nếu có thì dùng hàm dispatch để yêu cầu store cập nhật lại totoList liên tục
  // bởi vì bên trong có hàm dispatch nên Effect nó yêu cầu phải theo dõi luôn thôi.
  // Tại sao có gắn thêm dispatch ?

  const txtQuery_Changed = function (e) {
    setTerm(e.target.value);
  }

  const btnClear_Clicked = function () {
    setTerm(initQuery);
  }

  const txtQuery_KeyUp = function (e) {
    if (e.keyCode === 27) {
      btnClear_Clicked();
    }
  }

  return (
    <div>
      <label style={{ fontWeight: 'bold' }} >
        Filter tasks (by name)
        <div className="fg">
          <input type="text" value={term} onChange={txtQuery_Changed} onKeyUp={txtQuery_KeyUp} />
          <button onClick={btnClear_Clicked}>Clear</button>
        </div>
      </label>
    </div>
  )
}
