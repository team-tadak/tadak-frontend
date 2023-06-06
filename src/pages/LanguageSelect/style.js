import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const LanguageSelectSection = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px 0;
    gap: 32px;
`

export const LanguageSelectContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items:center;
    order: 0; 
    flex-grow: 1;
    gap: 10px;
`

export const LanguageSelectTitle = styled(motion.h1)`
    flex: 1 1 0;
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    padding: 24px;
    text-align: center;
`

export const LanguageCardList = styled(motion.div)`
    display:flex;
    flex-direction: column;
    gap:10px;
`

export const BluredLanguageCardList = styled(LanguageCardList)`
    filter: blur(5px);
    pointer-events:none;
`

export const CenterText = styled.div`
    position:absolute;
    left:50;
    top:50;
`

export const LanguageSelectUserContainer = styled.div`
    flex: none; 
    order: 1; 
    flex-grow: 0;
`