import React from "react";
import { useState } from "react";
import {v4 as uuid} from "uuid";


function MyWishlist() {

    const[todo , setTodo] = useState();
    const[todoList , setTodoList] = useState([]);


    const onTodoInputChange = (e) => {
        setTodo(e.target.value);
    }


    const onAddTodo = () => {
        setTodoList([...todoList , {id : uuid() , todo : todo , isCompleted : false}])
        setTodo("");
    }


    const onDelete = (id) => {
        const updatedList = todoList.filter(todoItem => todoItem.id !== id);
        setTodoList(updatedList); 
    }


    const onTodoCheck = (id) => {
        const updatedList = todoList.map(todoItem => todoItem.id === id ? {...todoItem , isCompleted : !todoItem.isCompleted} : todoItem);
        setTodoList(updatedList);
    }
    

    return (
        <div className="App">
                <h1>My Wishlist</h1>
            <div id="input-wishlist">
                <input value={todo} onChange={onTodoInputChange} placeholder="Add your wishlist here"></input>
                <button onClick={onAddTodo}>Add</button>
            </div>


            <div id="main">
                {
                    todoList?.length > 0 && todoList.map(todoItem => (
                        <div  id="todo-item" key={todoItem.id}>
                        <label>
                            <input onChange={() => onTodoCheck(todoItem.id)} type="checkbox" />
                            <span className={todoItem.isCompleted ? "checked" : ""}>{todoItem.todo}</span>
                        </label>
                        <button id="delete" onClick={() => onDelete(todoItem.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}




export default MyWishlist;