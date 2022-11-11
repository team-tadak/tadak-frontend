import styled from "@emotion/styled/macro";
import { theme } from "styles/theme";
export const TimerDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 5px;
gap: 0px;
border-radius: 20px;
background: #161B21
`

const baseText=styled.div`
font-style: normal;
font-weight: 400;
font-size: 48px;
color: ${theme.color.white};
`

export const DigitText = styled(baseText)`
font-family: monospace;
`

export const SymbolText = styled(baseText)`
`