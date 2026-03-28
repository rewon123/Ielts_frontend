import React from "react";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : "#ff0000")};
  background-color: ${(props) => (props.border ? "transparent" : "#ff0000")};
  width: 100%;
  height: 100%;
  padding: 15px;
  outline: none;
  text-align: center;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#ff0000")};
    border: 1px solid #ff0000;
    color: ${(props) => (props.border ? "#ff0000" : "#fff")};
  }
`;

