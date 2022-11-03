import styled from "@emotion/styled";

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

export const HiddenInput = styled.input`
  z-index: -1;
  position: absolute;
`;

export const Paragraph = styled.p`
  line-height: 200%;
`;

export const Letter = styled.span`
  font-family: "Courier New";
  font-weight: 700;
  font-size: 21px;
  color: ${(props) =>
    props.status === "untyped"
      ? "lightgray"
      : props.status === "correct"
      ? "blue"
      : "red"};
`;

export const StyledInput = styled.div``;
