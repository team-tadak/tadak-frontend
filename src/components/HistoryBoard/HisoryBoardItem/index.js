/** @jsxImportSource @emotion/react */
import {
  DateText,
  KPMText,
  StyledHistoryBoardItem,
} from "components/HistoryBoard/HisoryBoardItem/styles";
import React from "react";
import { SYNTAXES } from "constants/syntaxes";
import { LANGUAGES } from "constants/languages";
import { css } from "@emotion/react";
import Badge from "components/common/Badge";
import TagIcon from "components/common/icons/TagIcon";
import ExternalIcon from "components/common/icons/ExternalIcon";
import PlayIcon from "components/common/icons/PlayIcon";

function HistoryBoardItem({ type = "item", date, KPM, language, syntax, ...props }) {
  return (
    <StyledHistoryBoardItem isHeader={type === "header"} {...props}>
      <DateText isHeader={type === "header"}>
        {type === "header" ? "날짜" : date.toLocaleString("ko-KR")}
      </DateText>
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
        language = {LANGUAGES[language - 1]}
        syntax = {syntax}
      >
        {type === "header" ? "문법" : SYNTAXES[LANGUAGES[language - 1]][syntax - 1].title}
      </Badge>
      <Badge
        css={css`
          width: 180px;
        `}
        IconComponent={PlayIcon}
      >
        {type === "header" ? "바로 시작하기!" : "내 기록 깨러 가기!"}
      </Badge>
    </StyledHistoryBoardItem>
  );
}

export default HistoryBoardItem;
