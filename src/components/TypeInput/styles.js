import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const cursorBlink = keyframes`
 0% {
      background-color: #ACB2BE;
    }
    50.0% {
      background-color: transparent;
    }
    100.0% {
      background-color: #ACB2BE;
    }
`;

export const TypeInputContainer = styled.div`
  width: 1000px;
  height: 700px;
  background-color: #3a4050;
  border-radius: 10px 0 0 10px;
  padding: 35px;
`;

export const ContentBox = styled.article`
  //border: 1px solid #bfbfbf;
  border-radius: 10px;
  padding: 13px 20px 0;
  height: 600px;
  background-color: #1f263d;
`;

export const Paragraph = styled.p`
  line-height: 200%;
  word-wrap: break-word;
`;

export const Letter = styled.span`
  font-family: "Courier New", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, "Roboto";
  font-weight: 700;
  font-size: 21px;
  color: ${(props) =>
    props.status === "current"
      ? props.theme.color.gray
      : props.status === "untyped"
      ? props.theme.color.gray
      : props.status === "correct"
      ? props.theme.color.blue.light
      : props.theme.color.red.light};
  /* background-color: ${(props) => (props.status === "current" ? "black" : "transparent")}; */
  background-color: ${(props) =>
    props.status === "wrong" ? "rgba(255, 0, 0, 0.3)" : "transparent"};
  border-radius: 2px;
  animation: ${(props) =>
    props.status === "current"
      ? css`
          ${cursorBlink} 0.8s ease infinite
        `
      : "none"};
`;

export const StyledInput = styled.div``;
