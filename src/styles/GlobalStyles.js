import { css, Global, useTheme } from '@emotion/react';
import { resetAnchorStyle } from 'styles/utils/anchor';
import { defaultFadeInSlideToRightVariants } from './motions/motions';
import { resetCSS } from './reset';

export const globalStyles = (theme, isOpen) => css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-std.css');
  // 기본 style 적용된거 reset
  ${resetCSS}
  * {
    -webkit-tap-highlight-color: transparent; /* 모바일 터치시 하이라이트 되는 부분 제거 */
    box-sizing: border-box;
    /* transition: background-color 0.2s; */
    will-change: background-color;
  }
  html {
    font-size: 16px;
    font-family: 'Pretendard Std Variable', 'Pretendard Std', Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    /* 디바이스에서 자동으로 글자크기를 키우는 것을 방지 */
    -webkit-text-size-adjust: none; /* 크롬, 사파리, 오페라 신버전 */
    -ms-text-size-adjust: none; /* IE */
    -moz-text-size-adjust: none; /* 파이어폭스 */
    -o-text-size-adjust: none; /* 오페라 구버전 */

    /* 컨텐츠 양에 따라 스크롤바 생성 여부 달라짐 -> positioning 달라지는 문제 해결 */
    overflow-y: scroll;
  }
  body {
    background-color: #101217;
    color: white;
  }

  a {
    ${resetAnchorStyle}
  }

  input,
  button {
    font-family: inherit;
  }
`;

const GlobalStyles = () => {
  const theme = useTheme();

  return <Global styles={globalStyles(theme)} />;
};

export default GlobalStyles;
