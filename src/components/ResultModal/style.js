import styled from "@emotion/styled/macro";
import { theme } from "styles/theme"

const baseDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
border-radius: 10px;
`
export const Modal = styled(baseDiv)`
padding: 40px 20px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 100;
width: 400px;
background: ${theme.color.modalBG};
`;

export const Icon = styled.img`
width: 40px;
height: 40px;
`

export const ConfirmButton = styled(baseDiv)`
padding: 10px;
width: 100%;
background: ${theme.color.primary500};
`

export const NormalText = styled.h1`
font-size: 16px;
// line-height: 19px;
color: ${theme.color.white}
`

export const SpeedText = styled(NormalText)`
font-style: bold;
font-size: 36px;
`
