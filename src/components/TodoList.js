import React, { useContext } from 'react'
import ToDoItem from './TodoItem';                  // phân biệt component TodoList với TodoItem ?
// toDoList gồm nhiều toDoItem (giống cái board gồm nhiều square)
import todoAppContext from '../todoAppContext';   // giải thích lấy cái này làm gì ?
// import todoAppContext
// cả bên provider và bên consumer đều cần import context
// context đóng vai trò trung gian giữa 2 bên

export default function TodoList(props) {

  const { store } = useContext(todoAppContext); // useContext dùng làm gì ?
  // lấy ra value được cung cấp từ Provider

  return (
    <div>
      <h3>Todo List</h3>    
      <ul>
        { // vì sao phải dùng thêm filter và toLowerCase ?
        // lát nữa khi dùng chức năng search thì phải lọc lại. 
        // khi store thay đổi, list sẽ tự động được render lại.
          store.items.filter(item => item.title.toLowerCase().includes(store.query.toLowerCase()))
            .map(item => <ToDoItem key={item.id} item={item} />)
        }
      </ul>
    </div>
  )
}
