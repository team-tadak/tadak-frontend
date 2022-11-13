import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";
import { theme } from "styles/theme";

export const MainPageContainer = styled.main`
  display: flex;
  min-height: 100vh;
  /* flex-basis: 0; */
`;

export const MainPageContentSection = styled(motion.section)`
  display:flex;
  flex-direction: column;
  flex-grow: 1;
`;
export const MainPageImageSection = styled(motion.section)`
  flex-grow: 9;
`;

export const Title = styled(motion.h1)`
  margin-top: 160px;

  font-size: 70px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;
export const SubTitle = styled(motion.p)`
  margin-top: 8px;

  font-size: 28px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.white};

  &:first-of-type {
    margin-top: 16px;
  }
`;

export const TitleContainer = styled.div`
margin-bottom: 5rem;
`

export const MainPageInputContainer = styled.div`
display: flex;
flex-flow: row;
align-items: flex-start;
justify-content: flex-start;
`

export const MainPageImage = styled(motion.div)`
  background-image: url("images/main_image.png");

  background-size: contain;
  background-repeat: no-repeat;

  /* 블러 효과  */
  filter: blur(4px);
  -webkit-filter: blur(4px);

  height: 1000px;
`;
