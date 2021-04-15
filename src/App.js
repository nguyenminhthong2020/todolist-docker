import React, { useEffect, useReducer } from 'react'

import AddTask from './components/AddTask'
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList'

import AppContext from './todoAppContext';
import reducer from './todoAppReducer';

function App() {

  const initialAppState = {
    query: '',
    items: []
  }

  const [store, dispatch] = useReducer(reducer, initialAppState); // nhắc lại xem dùng useReducer thì có phải bỏ useState luôn ko ?
  // ko nhé. Vì có 2 khái niệm : state chung và state của riêng component.
  // state chung : có mối liên hệ nào đó. Hoặc xử lý phức tạp,...
  // VD state chung : thông tin đăng nhập của user (athentication & authorization)
  useEffect(function () {    // Giải thích ý nghĩa của useEffect trong đoạn code này ?
    // làm giả lấy dữ liệu json từ API, sau đó gửi dispatch yêu cầu thay đổi state (store)
    // init (khởi tạo lần đầu)
    setTimeout(function () {
      const items_fetch_from_backend = [
        { id: 1, title: 'Pay Bills', complete: true },
        { id: 2, title: 'Learn ReactJS', complete: false },
        { id: 3, title: 'Learn NodeJS Express', complete: true },
        { id: 4, title: 'Learn PassportJS', complete: false },
        { id: 5, title: 'Complete Final Project', complete: false },
        { id: 6, title: 'Have Dinner', complete: false },
        { id: 7, title: 'Complete Final Project', complete: false },
      ];

      dispatch({
        type: 'init',
        payload: {
          items: items_fetch_from_backend,
          query: ''
        }
      });
    }, 300);
  }, []);      // Giải thích từng trường hợp cái biến ([]) ứng với Component LifeCycle bên Class Component ?
  // didMount (sau khi render lần đầu. lấy dữ liệu gán vào state / store)


  return (
    <div className="container">  
      <AppContext.Provider value={{ store, dispatch}}>
        <SearchBar initQuery="" />
        <TodoList />
        <AddTask initValue="New Item Title" />
      </AppContext.Provider>
    </div>
  );
}

export default App;
