import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StBox>
      <div>My Todo List</div>
      <div>React</div>
    </StBox>
  );
};

export default Header;

const StBox = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 0 30px;
  font-size: 1.5em;
  margin-bottom: 20px;
`;
