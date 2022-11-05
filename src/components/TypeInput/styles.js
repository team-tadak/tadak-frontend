import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const cursorBlink = keyframes`
 0% {
      background-color: black;
    }
    50.0% {
      background-color: transparent;
    }
    100.0% {
      background-color: black;
    }
`;
export const TypeInputContainer = styled.div`
  width: 770px;
  background-color: white;
  border-radius: 10px;
  padding: 35px;
`;

export const ContentBox = styled.article`
  border: 1px solid #bfbfbf;
  border-radius: 10px;
  padding: 13px 20px 0;
`;

export const Paragraph = styled.p`
  line-height: 200%;
`;

export const Letter = styled.span`
  font-family: "Courier New";
  font-weight: 700;
  font-size: 21px;
  color: ${(props) =>
    props.status === "current"
      ? "lightgray"
      : props.status === "untyped"
      ? "lightgray"
      : props.status === "correct"
      ? "blue"
      : "red"};
  /* background-color: ${(props) =>
    props.status === "current" ? "black" : "transparent"}; */
  background-color: ${(props) =>
    props.status === "wrong" ? "rgba(255, 0, 0, 0.1)" : "transparent"};

  animation: ${(props) =>
    props.status === "current"
      ? css`
          ${cursorBlink} 1s ease infinite
        `
      : "none"};
`;

export const StyledInput = styled.div``;
