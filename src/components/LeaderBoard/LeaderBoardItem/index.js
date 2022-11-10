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

function LeaderBoardItem() {
  return (
    <StyledLeaderBoardItem>
      <RankNumberText>3</RankNumberText>
      <UserProfileContainer>
        <UserProfileContainer>
          <UserProfileImageContainer>
            <Logo />
          </UserProfileImageContainer>
          <UserProfileTextContainer>
            <UserProfileNameText>홍 길동</UserProfileNameText>
            <UserProfileEmailText>hongkildong@hongkildong.com</UserProfileEmailText>
          </UserProfileTextContainer>
        </UserProfileContainer>
      </UserProfileContainer>
      <KPMText>1022 타</KPMText>
      <Badge
        css={css`
          width: 180px;
        `}
        IconComponent={TagIcon}
      >
        Python
      </Badge>
      <Badge
        css={css`
          width: 180px;
        `}
        IconComponent={ExternalIcon}
      >
        while 문 써보기
      </Badge>
    </StyledLeaderBoardItem>
  );
}

export default LeaderBoardItem;
