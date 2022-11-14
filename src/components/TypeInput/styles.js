import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { hexToRgba } from "utils/color";

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

export const StyledTypeInput = styled.div`
  width: 960px;
  height: 800px;
  background-color: ${({ theme }) => theme.color.board};
  border-radius: 20px;
  padding: 35px;
`;

export const Paragraph = styled.p`
  line-height: 200%;
  word-wrap: break-word;
`;

export const Letter = styled.span`
  font-family: "Courier New", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif, "Roboto";
  font-weight: 700;
  font-size: 20px;
  color: ${(props) =>
    props.status === "current"
      ? props.theme.color.gray
      : props.status === "untyped"
      ? props.theme.color.gray
      : props.status === "correct"
      ? props.theme.color.blue.light
      : props.theme.color.warning300};
  /* background-color: ${(props) => (props.status === "current" ? "black" : "transparent")}; */
  background-color: ${(props) =>
    props.status === "wrong" ? hexToRgba(props.theme.color.warning300, 0.1) : "transparent"};
  border-radius: 2px;
  animation: ${(props) =>
    props.status === "current"
      ? css`
          ${cursorBlink} 0.8s ease infinite
        `
      : "none"};
`;

export const StyledInput = styled.div``;
