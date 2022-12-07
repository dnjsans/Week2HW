import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Todos = () => {
  const location = useLocation();
  const navigate = useNavigate();
console.log(location)
  return (
    <StMainBox>
      <StMain>
        <StSmallBox>
          <div>ID:{location.state.id}</div>
          <StButton
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </StButton>
        </StSmallBox>
        <h1>{location.state.title}</h1>
        <div>{location.state.body}</div>
      </StMain>
    </StMainBox>
  );
};

export default Todos;

const StMainBox = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StMain = styled.div`
  border: 1px solid;
  width: 550px;
  height: 350px;
  padding: 20px;
  font-size: 1.5em;
`;

const StSmallBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
`;

const StButton = styled.button`
  height: 50px;
  width: 150px;
  border-radius: 5px;
  background-color: white;
  font-size: 1.2em;
`;
