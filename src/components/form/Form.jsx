import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/modules/todo";
import styled from "styled-components";

const Form = () => {
  const todo = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // const onChangeHandler = (event) => {
  //   const {name, value} = event.target;
  //   setTodo({...todo, [name]:value});
  // }
  console.log(todo);
  const onSubmitHandler = (event) => {
    // submit의 새로고침을 막기위해
    event.preventDefault(); // 이벤트가 여러개 섞여있을때 상위 이벤트가 실행되는걸 막아준다. 이 이벤트만 실행하겠다.
    if (title === "" || body === "") return;

    dispatch(addTodo({ id: Date.now(), title, body, isDone: false }));
    console.log("string");
  };

  return (
    <StForm onSubmit={onSubmitHandler}>
      <StLabel>제목</StLabel>
      <StAddInput
        type="text"
        name="title"
        value={todo.title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <StLabel>내용</StLabel>
      <StAddInput
        type="text"
        name="body"
        value={todo.body}
        onChange={(event) => setBody(event.target.value)}
      />
      <StAddButton type="submit">추가하기</StAddButton>
    </StForm>
  );
};

export default Form;

const StForm = styled.form`
  border-radius: 10px;
  height: 60px;
  padding: 0 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  background-color: gray;
`;

const StLabel = styled.label`
  display: flex;
  font-size: 20px;
`;

const StAddButton = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 10px;
  background-color: blue;
  color: white;
`;

const StAddInput = styled.input`
  height: 25px;
  width: 200px;
  border-radius: 5px;
`;
