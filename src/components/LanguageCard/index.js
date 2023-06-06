import PythonIcon from "components/common/icons/languages/PythonIcon"
import RightIcon from "components/common/icons/RightIcon"
import { CardContainer, IconContainer, Title, Summary, TextContainer } from "./styles"
import styled from "@emotion/styled"
import Link from "next/link";

const Container = styled.div`display:flex;flex-direction:row;gap:16px;`

function LanguageCard({
    title = "Python",
    summary = `입문자들을 위한 쉬운 언어 파이썬. \n코딩 초심자도 쉽게 시도 가능!`,
    link = "/Python",
    LangIcon = PythonIcon,
    style = {}
}) {
    return (


        <Link href={link}>
            <CardContainer>
                <Container>
                    <IconContainer>
                        <LangIcon></LangIcon>
                    </IconContainer>
                    <TextContainer>
                        <Title>{title}</Title>
                        <Summary>{summary}</Summary>
                    </TextContainer>
                </Container>
                <RightIcon />
            </CardContainer>
        </Link>

    )
}

export default LanguageCard