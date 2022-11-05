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
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TypeInputContainer = styled.div`
  width: 1000px;
  height: 700px;
  background-color: #3a4050;
  //border-radius: 10px;
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
  font-family: "Courier New", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif,
    "Roboto";
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
  /* background-color: ${(props) =>
    props.status === "current" ? "black" : "transparent"}; */
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

export const EmojiBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  height: 450px;
  background-color: #3a4050;
  //border-radius: 10px;
`;

export const Emoji = styled.article`
  //border: 1px solid #bfbfbf;
  //border-radius: 10px;
  //padding: 13px 20px 0;
  height: 400px;
  width: 300px;
  background-image: url(${process.env.PUBLIC_URL + "/img/emoji.png"});
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const NameFont = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  background-color: #1f263d;
  height: 60px;
  width: 200px;
  border-radius: 10px;
  margin-top: 32px;
  font-weight: bold;
`;

export const RealTimeResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 250px;
  //border-radius: 10px;
  background-color: #3a4050;
  padding-bottom: 30px;
`;

export const FastFont = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  height: 60px;
  width: 200px;
  background-color: #1f263d;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const TimeFont = styled.span`
  font-size: 20px;
  color: white;
  height: 60px;
  width: 200px;
  background-color: #1f263d;
  margin-bottom: 30px;
`;

export const StyledInput = styled.div``;
