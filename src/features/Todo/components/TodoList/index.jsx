import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({ todoList, onTodoClick }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return; //Nếu thằng cha ko truyền prop xuống=>ko làm gì cả,nguoc lai

        onTodoClick(todo, idx);
    }

    return (
        <ul className="todo-list">
            {
                todoList.map((todo, idx) => (
                    <li
                        key={todo.id}
                        className={classnames({
                            'todo-Item': true,
                            completed: todo.status === 'completed'
                        })}
                        onClick={() => handleTodoClick(todo, idx)}
                    >
                        {todo.title}
                    </li>   //do đơn gian nên ko ghi trong TodoItem
                ))
            }
        </ul>
    );
}

export default TodoList;