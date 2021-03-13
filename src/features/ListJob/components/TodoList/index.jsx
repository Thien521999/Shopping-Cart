import React from 'react';
import PropTypes from 'prop-types';

ListJob.propTypes = {
    todoList: PropTypes.array,
    onJobClick: PropTypes.func,
};

ListJob.defaultProps = {
    todoList: [],
    onJobClick: null,
}

function ListJob(props) {
    const { todoList, onJobClick } = props;
    const handleJobClick = (todo, idx) => {
        if (!onJobClick) return;
        onJobClick(todo, idx);
    }
    return (
        <ul className="job-list">
            {
                todoList.map((todo, idx) => (
                    <li
                        key={todo.id}
                        onClick={() => handleJobClick(todo, idx)}
                    >
                        {todo.title}
                    </li>
                ))
            }
        </ul>
    );
}

export default ListJob;