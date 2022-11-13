import styled from "@emotion/styled/macro";

export const LanguageSelectSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 24px 0;
    gap: 39px;
`

export const LanguageSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    order: 0; 
    flex-grow: 1;
    gap: 10px;
`

export const LanguageSelectTitle = styled.div`
    flex: 1 1 0;
    // font-style: bold;
    // font-size:40px;
    // margin: 20px;
    // font-weight: 700;
    // font-size: 32px;
    // line-height: 38px;
    // margin-top: 24px;
    // margin-bottom: 40px;
    // text-align: center;
    width: 100%;
    font-size: 32px;
    font-weight: bold;
    padding: 24px;
    text-align: center;
`

export const LanguageCardList = styled.div`
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