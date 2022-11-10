import { MyPageContainer } from "pages/MyPage/styles";
import React from "react";
import { staggerQuarter, defaultFadeInVariants } from "styles/motions";
import Typography from "components/common/Typography";

function MyPage() {
  return (
    <MyPageContainer variants={staggerQuarter} initial="initial" whileInView="animate" exit="exit">
      <Typography variants={defaultFadeInVariants}>내 플레이 기록</Typography>
    </MyPageContainer>
  );
}

export default MyPage;
