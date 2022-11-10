import styled from "@emotion/styled/macro";
import { motion } from "framer-motion";

export const StyledLeaderBoardItem = styled(motion.li)`
  padding: 16px;
  padding: ${({ theme, isHeader }) => (isHeader ? "0 16px 16px" : "16px")};
  width: 100%;
  background-color: ${({ theme, isHeader }) => (isHeader ? "transparent" : theme.color.board)};

  border-radius: 10px;

  display: flex;
  align-items: center;
`;

export const RankNumberText = styled.div`
  font-weight: ${({ isHeader }) => (isHeader ? "400" : "700")};
  font-size: ${({ isHeader }) => (isHeader ? "14px" : "20px")};
  color: ${(props) => props.theme.color.white};
  margin-right: 6px;

  width: 50px;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  column-gap: 12px;
  width: 360px;
  font-size: ${({ isHeader }) => (isHeader ? "14px" : "16px")};
`;

export const UserProfileImageContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 1px dashed ${({ theme }) => theme.color.white};

  /* 로고 중앙 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserProfileNameText = styled.div`
  font-weight: 600; // 너무 두꺼워서 글자가 뭉개져서 일단 기존 디자인 안과 달리 600으로 해 두었습니다.
  font-size: 20px;
  color: ${(props) => props.theme.color.white};
`;
export const UserProfileEmailText = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.color.grayText};
`;

// KPM: Keystrokes Per Minute, 타수
export const KPMText = styled.div`
  font-weight: ${({ isHeader }) => (isHeader ? "400" : "700")};
  font-size: ${({ isHeader }) => (isHeader ? "14px" : "20px")};
  color: ${(props) => props.theme.color.white};

  width: 160px;
`;
