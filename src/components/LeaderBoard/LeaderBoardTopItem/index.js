/** @jsxImportSource @emotion/react */
import Badge from "components/common/Badge";
import ExternalIcon from "components/common/icons/ExternalIcon";
import TagIcon from "components/common/icons/TagIcon";
import Logo from "components/common/Logo";
import { StyledLeaderBoardTopItem } from "components/LeaderBoard/LeaderBoardTopItem/styles";
import React from "react";
import { css } from "@emotion/react";
import { LANGUAGES } from "constants/languages";
import { SYNTAXES } from "constants/syntaxes";

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
  return <StyledLeaderBoardTopItem {...props}>1등 사용자 또는 2등 사용자</StyledLeaderBoardTopItem>;
}

export default LeaderBoardTopItem;
