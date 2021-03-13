import React, { useState } from "react";
import PostFilterForm from "./components/PostFilterForm";
import TodoForm from "./components/TodoForm";
import ListJob from "./components/TodoList";

ListJobFeatures.propTypes = {};

function ListJobFeatures(props) {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: "I love you",
        },
        {
            id: 2,
            title: "A mazing good job em",
        },
        {
            id: 3,
            title: "I like react js",
        },
    ]);

    const handleJobClick = (todo, idx) => {
        console.log(idx);
        const newTodoList = [...todoList];
        newTodoList.splice(idx, 1); //tai vi tri đó,xoa 1 phan tu
        setTodoList(newTodoList);
    };

    const handleTodoFormSubmit = (formValues) => {
        console.log("Form Submit: ", formValues);

        const newJob = {
            id: todoList.length + 1,
            ...formValues,
        };

        const newTodoList = [...todoList];
        newTodoList.push(newJob);
        setTodoList(newTodoList);
    };

    const handleSearchChange = (formValue) => {
        console.log('value', formValue);
    }

    return (
        <div>
            <h3>My favotites</h3>
            <PostFilterForm onSubmit={handleSearchChange} />
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <ListJob todoList={todoList} onJobClick={handleJobClick} />
        </div>
    );
}

export default ListJobFeatures;
