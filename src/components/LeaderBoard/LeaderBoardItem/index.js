/** @jsxImportSource @emotion/react */
import Badge from "components/common/Badge";
import ExternalIcon from "components/common/icons/ExternalIcon";
import TagIcon from "components/common/icons/TagIcon";
import Logo from "components/common/Logo";
import {
  KPMText,
  RankNumberText,
  StyledLeaderBoardItem,
  UserProfileContainer,
  UserProfileEmailText,
  UserProfileImageContainer,
  UserProfileNameText,
  UserProfileTextContainer,
} from "components/LeaderBoard/LeaderBoardItem/styles";
import React from "react";
import { css } from "@emotion/react";
import { LANGUAGES } from "constants/languages";
import { SYNTAXES } from "constants/syntaxes";

function LeaderBoardItem({ rank, username, email, KPM, language, syntax, ...props }) {
  return (
    <StyledLeaderBoardItem {...props}>
      <RankNumberText>{rank}</RankNumberText>
      <UserProfileContainer>
        <UserProfileContainer>
          <UserProfileImageContainer>
            <Logo />
          </UserProfileImageContainer>
          <UserProfileTextContainer>
            <UserProfileNameText>{username}</UserProfileNameText>
            <UserProfileEmailText>{email}</UserProfileEmailText>
          </UserProfileTextContainer>
        </UserProfileContainer>
      </UserProfileContainer>
      <KPMText>{KPM} 타</KPMText>
      <Badge
        css={css`
          width: 180px;
        `}
        IconComponent={TagIcon}
      >
        {LANGUAGES[language - 1]}
      </Badge>
      <Badge
        css={css`
          width: 180px;
        `}
        IconComponent={ExternalIcon}
      >
        {SYNTAXES[LANGUAGES[language - 1]][syntax - 1]}
      </Badge>
    </StyledLeaderBoardItem>
  );
}

export default LeaderBoardItem;
