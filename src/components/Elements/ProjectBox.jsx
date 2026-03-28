import React from "react";
import styled from "styled-components";

export default function ProjectBox({ img, title, text, action}) {
  return (
    <Wrapper>
      <ImgBtn className="aniamte pointer" onClick={action ? () => action() : null}>
        <img className="radius8" src={img} alt="project"></img>
      </ImgBtn>

    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;

  }
 
`;
const ImgBtn = styled.button`
  background-color: white;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  width

  :hover > img {
    opacity: 0.5;
  }
`;