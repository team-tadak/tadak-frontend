/** @jsxImportSource @emotion/react */
import Badge from "components/common/Badge";
import ExternalIcon from "components/common/icons/ExternalIcon";
import TagIcon from "components/common/icons/TagIcon";
import Logo from "components/common/Logo";
import {
  LeaderBoardTopItemBasicInfoContainer,
  StyledLeaderBoardTopItem,
  KPMText,
  LeaderBoardTopItemLanguageSyntaxContainer,
} from "components/LeaderBoard/LeaderBoardTopItem/styles";
import React from "react";
import { css } from "@emotion/react";
import { LANGUAGES } from "constants/languages";
import { SYNTAXES } from "constants/syntaxes";
import UserProfile from "components/common/UserProfile";

function LeaderBoardTopItem({
  type = "item",
  rank,
  username,
  email,
  KPM,
  language,
  syntax,
  ...props
}) {
  return (
    <StyledLeaderBoardTopItem {...props}>
      <LeaderBoardTopItemBasicInfoContainer>
        <UserProfile
          username={username}
          email={email}
          css={css`
            width: unset;
          `}
        />
        <KPMText>{KPM} 타</KPMText>
      </LeaderBoardTopItemBasicInfoContainer>
      <LeaderBoardTopItemLanguageSyntaxContainer>
        <Badge IconComponent={TagIcon}>
          {type === "header" ? "언어" : LANGUAGES[language - 1]}
        </Badge>
        <Badge IconComponent={ExternalIcon}>
          {type === "header" ? "문법" : SYNTAXES[LANGUAGES[language - 1]][syntax - 1]}
        </Badge>
      </LeaderBoardTopItemLanguageSyntaxContainer>
    </StyledLeaderBoardTopItem>
  );
}

export default LeaderBoardTopItem;
