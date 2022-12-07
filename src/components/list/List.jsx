import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, changeTodo } from "../../redux/modules/todo.js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todo = useSelector((state) => state.todo.todo);

  const onDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const onChangeTodo = (id) => {
    dispatch(changeTodo(id));
  };

  return (
    <StListBox>
      <h1>Working..🔥</h1>
      <StSmallBox>
        {todo.map((todos) => {
          if (!todos.isDone) {
            return (
              <StTodoBox key={todos.id}>
                <button onClick={()=> {
                  navigate("/Todos", {
                    state: {
                      id: todos.id,
                      title: todos.title,
                      body: todos.body,
                    },
                  });
                }}> 상세보기 </button>
                <h1>{todos.title}</h1>
                <div>{todos.body}</div>
                <StDelBtn onClick={() => onDeleteTodo(todos.id)}>
                  삭제하기
                </StDelBtn>
                <StChgBtn onClick={() => onChangeTodo(todos.id)}>
                  {todos.isDone ? "취소!" : "완료!"}
                </StChgBtn>
              </StTodoBox>
            );
          }
        })}
      </StSmallBox>
      <h1>Done..🎉</h1>
      <StSmallBox>
        {todo.map((todos) => {
          if (todos.isDone) {
            return (
              <StTodoBox key={todos.id}>
                <button onClick={()=> {
                  navigate("/Todos", {
                    state: {
                      id: todos.id,
                      title: todos.title,
                      body: todos.body,
                    },
                  });
                }}> 상세보기 </button>
                <h2>{todos.title}</h2>
                <div>{todos.body}</div>
                <StDelBtn onClick={() => onDeleteTodo(todos.id)}>
                  삭제하기
                </StDelBtn>
                <StChgBtn onClick={() => onChangeTodo(todos.id)}>
                  {todos.isDone ? "취소!" : "완료!"}
                </StChgBtn>
              </StTodoBox>
            );
          }
        })}
      </StSmallBox>
    </StListBox>
  );
};

export default List;

const StListBox = styled.div`
  padding: 0 25px;
  flex-direction: column;
`;

const StSmallBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
`;

const StTodoBox = styled.div`
  border: 2px solid green;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 220px;
  align-items: center;
`;

const StDelBtn = styled.button`
  border: 2px solid red;
  border-radius: 5px;
  background-color: white;
  padding: 8px 20px;
  margin-right: 15px;
`;

const StChgBtn = styled.button`
  border: 2px solid blue;
  border-radius: 5px;
  background-color: white;
  padding: 8px 30px;
`;
