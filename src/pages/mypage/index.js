import { MyPageContainer, MyPageContentContainer } from 'pages/mypage/styles';
import UserContainer from './UserContainer';
import React from 'react';
import { staggerQuarter, defaultFadeInVariants } from 'styles/motions';
import Typography from 'components/common/Typography';
import HistoryBoard from 'components/HistoryBoard';

function MyPage() {
  return (
    <MyPageContainer>
      <MyPageContentContainer
        variants={staggerQuarter}
        initial="initial"
        whileInView="animate"
        exit="exit"
      >
        <Typography variants={defaultFadeInVariants}>내 플레이 기록</Typography>
        <HistoryBoard />
      </MyPageContentContainer>
      <UserContainer />
    </MyPageContainer>
  );
}

export default MyPage;
