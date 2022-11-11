/** @jsxImportSource @emotion/react */
import Badge from "components/common/Badge";
import ExternalIcon from "components/common/icons/ExternalIcon";
import TagIcon from "components/common/icons/TagIcon";
import {
  KPMText,
  RankNumberText,
  StyledLeaderBoardItem,
} from "components/LeaderBoard/LeaderBoardItem/styles";
import React from "react";
import { css } from "@emotion/react";
import { LANGUAGES } from "constants/languages";
import { SYNTAXES } from "constants/syntaxes";
import UserProfile from "components/common/UserProfile";

function LeaderBoardItem({
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
    <StyledLeaderBoardItem isHeader={type === "header"} {...props}>
      <RankNumberText isHeader={type === "header"}>
        {type === "header" ? "순위" : rank}
      </RankNumberText>

      <UserProfile type={type} username={username} email={email} />

      <KPMText isHeader={type === "header"}>{type === "header" ? "타수" : `${KPM} 타`}</KPMText>
      <Badge
        css={css`
          width: 180px;
        `}
        IconComponent={TagIcon}
      >
        {type === "header" ? "언어" : LANGUAGES[language - 1]}
      </Badge>
      <Badge
        css={css`
          width: 180px;
        `}
        IconComponent={ExternalIcon}
      >
        {type === "header" ? "문법" : SYNTAXES[LANGUAGES[language - 1]][syntax - 1]}
      </Badge>
    </StyledLeaderBoardItem>
  );
}

export default LeaderBoardItem;
