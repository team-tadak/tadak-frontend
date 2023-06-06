import { HeadingText, SubHeadingText } from 'components/common/Typography/styles';
import React from 'react';

function Typography({ type = 'heading', children, variants, ...props }) {
  return (
    <>
      {type === 'subHeading' ? (
        <SubHeadingText variants={variants}>{children}</SubHeadingText>
      ) : (
        <HeadingText variants={variants}>{children}</HeadingText>
      )}
    </>
  );
}

export default Typography;
