import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import ResultContainer from './ResultContainer';
import useUser from 'hooks/useUser';

import { useSWRConfig } from 'swr';
import { handleLogout } from 'utils/logout';
import { useRouter } from 'next/router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-sizing: border-box;
  //justify-content: center;
  //align-items: flex-start;
  padding: 24px;
  gap: 8px;
  width: 256px;
  height: max-content;
  left: 1373px;
  top: 192px;
  background: #161b21;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 0px 24px;
  gap: 16px;
  width: 210px;
  height: 158px;
`;

const UserPicture = styled.div`
  width: 64px;
  height: 64px;

  background-image: url('/img/emoji.png');
  background-size: cover;
  border-radius: 32px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;
  width: 210px;
  height: 54px;
`;

const UserFont = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
`;

const EmailFont = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #6f7680;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
`;

// URL 을 parsing 해서 현재 typepage 인지 아닌지 판단
// 원시적인 방법이라 추후 다른 방법 대체 필요
function isTypePage(url) {
  if ((url.startsWith('/python/') || url.startsWith('/Python/')) && url.length >= 9) {
    return true;
  }
  if ((url.startsWith('/html/') || url.startsWith('/Html/')) && url.length >= 7) {
    return true;
  }
  if ((url.startsWith('/c/') || url.startsWith('/C/')) && url.length >= 4) {
    return true;
  }
  return false;
}

function UserContainer({ currentKPM }) {
  const router = useRouter();
  const pathname = router.pathname;
  const { user, error } = useUser(1, 1);

  const { cache } = useSWRConfig();

  return (
    <Container>
      <UserInfoContainer>
        <UserPicture />
        <UserInfo>
          <UserFont>{user?.username ?? 'Guest'}</UserFont>
          <EmailFont>{user?.email ?? '기록을 사용하려면 로그인하세요!'}</EmailFont>
        </UserInfo>
      </UserInfoContainer>
      <ResultContainer
        title={isTypePage(pathname) ? '현재 타수' : '내 기록'}
        icon="1"
        record={
          isTypePage(pathname)
            ? currentKPM
              ? `${currentKPM} 타`
              : '000 타'
            : `${user
              ? user?.highest_record
                ? `${user?.highest_record} 타`
                : '기록이 없습니다'
              : '로그인 필요'
            } `
        }
      />
      <ResultContainer
        title={isTypePage(pathname) ? '정확도' : '내 랭킹'}
        icon="2"
        record={
          isTypePage(pathname)
            ? '기능 준비 중'
            : `${user ? user?.ranking ?? '기록이 없습니다' : '로그인 필요'}`
        }
      />
      <ButtonContainer>
        <Button href="/languageselect" icon="1" content={'언어선택'} />
        {/* end 속성은 /python 까지만 비교. 그렇지 않으면 /python/2 도 같은 링크로 취급해서 타자 치는 곳에서 active 되버림.  */}
        <Button end href="/python" icon="2" content={'문법선택'} />
        <Button href="/leaderboard" icon="3" content={'랭킹보드'} />
        <Button
          kind="logout"
          href="/"
          icon="4"
          content={'로그아웃'}
          onClick={() => {
            handleLogout(cache);
          }}
        />
      </ButtonContainer>
    </Container>
  );
}

export default UserContainer;
