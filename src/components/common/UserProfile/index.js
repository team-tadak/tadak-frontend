import React from 'react';
import Logo from 'components/common/Logo';
import {
  UserProfileContainer,
  UserProfileImageContainer,
  UserProfileTextContainer,
  UserProfileNameText,
  UserProfileEmailText,
} from 'components/common/UserProfile/styles';

function UserProfile({ type, username, email, ...props }) {
  return (
    <UserProfileContainer isheader={type === 'header' ? 1 : 0} {...props}>
      {type === 'header' ? (
        '사용자'
      ) : (
        <>
          <UserProfileImageContainer>
            <Logo />
          </UserProfileImageContainer>
          <UserProfileTextContainer>
            <UserProfileNameText>{username}</UserProfileNameText>
            <UserProfileEmailText>{email}</UserProfileEmailText>
          </UserProfileTextContainer>
        </>
      )}
    </UserProfileContainer>
  );
}

export default UserProfile;
