import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];

  //Lấy thông tin location thông qua cái hooks useLocation.
  const location = useLocation();
  const history = useHistory();
  //const match = useRouteMatch();//cai path hien tai dang dung

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });

  //useEffect phụ thuộc vào location.search.Moi khi location.search thay đoi mình se cap nhat lai filteredStatus bang voi params trong location search 
  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || "all");
  }, [location.search]);

  const handleTodoClick = (todo, idx) => {
    //clone current array the new one
    const newTodoList = [...todoList];

    //console.log(todo, idx);
    //toggle state
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };
    newTodoList[idx] = newTodo;
    console.log(newTodo);
    //update todo List
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setFilteredStatus('all');
    const queryParams = { status: "all" };
    history.push({
      pathname: Math.path,//lấy path hiện tại
      search: queryString.stringify(queryParams),//cap nhat lai len tren URL 
    });
  };

  const handleShowCompletedClick = () => {
    // setFilteredStatus('completed');
    const queryParams = { status: "completed" };
    history.push({
      pathname: Math.path,//lấy path hiện tại
      search: queryString.stringify(queryParams),//cap nhat lai len tren URL 
    });
  };

  const handleShowNewClick = () => {
    // setFilteredStatus('new');
    const queryParams = { status: "new" };
    history.push({
      pathname: Math.path,//lấy path hiện tại
      search: queryString.stringify(queryParams),//cap nhat lai len tren URL 
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === "all" || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  const handleTodoFormSubmit = (values) => {
    console.log("Form submit :", values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    }
    console.log(newTodo);

    const newTodoList = [...todoList, newTodo];

    setTodoList(newTodoList);
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>What to do</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Compeleted</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
