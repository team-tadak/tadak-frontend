import styled from "@emotion/styled";

export const SyntaxSelectContainer = styled.div`
  width: 280px;
  height: 322px;
  background-color: #26262d;
  border-radius: 10px;
  padding: 16px;
`;

export const SyntaxExampleBox = styled.div`
  width: 100%;
  height: 124px;
  background-color: #161b21;
  border-radius: 10px;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
  padding-left: 15px;
  padding-top: 20px;
  font-family: "Courier New", Courier, monospace; // 임의로 폰트 설정 (그에 따라 padding, line-height 설정)
  line-height: 0.7cm;
`;

export const SyntaxTitleBox = styled.div`
  width: 100%;
  height: 44px;
  margin-bottom: 16px;
  position: relative;
`;

export const SyntaxTitle = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  top: 0;
  position: absolute;
`;

export const SyntaxLevel = styled.div`
  position: absolute;
  width: 100%;
  height: 16px;
  bottom: 0;
  alt: "syntax level star";
  margin-right: 2px;
  flex-wrap: wrap;
`;

export const SyntaxStar = styled.img`
  alt: "syntax level star";
  margin-right: 2px;
`;

export const SyntaxSummary = styled.div`
  width: 100%;
  height: 34px;
  margin-bottom: 16px;
  font-size: 14px;
`;

export const SyntaxStartButton = styled.button`
  border: none;
  outline: none;
  width: 100%;
  height: 40px;
  background-color: #bfcdf0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  color: #26262d;
  text-align: center;
  font-weight: bold;
`;

// 사용 예시
//
// /<SyntaxSelectComponent
// example={
//   <p>
//     def sum(a, b):
//     <br />
//     &nbsp;&nbsp;&nbsp;&nbsp;result = a + b<br />
//     &nbsp;&nbsp;&nbsp;&nbsp;return result
//   </p>
// }
// title="함수 정의 및 사용"
// level="2"
// summary="파이썬에서 재사용을 위한 함수를 배웁니다! 함수는 프로그래밍 언어에서 핵심적입니다!"
// />

function SyntaxSelectComponent({ example, title, level, summary }) {
  var stars = [];
  for (var i = 0; i < 5; i++) {
    if (i < level) {
      stars.push(<SyntaxStar src={process.env.PUBLIC_URL + `/images/full_star.png`} />);
    } else {
      stars.push(<SyntaxStar src={process.env.PUBLIC_URL + `/images/empty_star.png`} />);
    }
  }
  return (
    <SyntaxSelectContainer>
      <SyntaxExampleBox>
        <p>{example}</p>
      </SyntaxExampleBox>
      <SyntaxTitleBox>
        <SyntaxTitle>{title}</SyntaxTitle>
        <SyntaxLevel>{stars}</SyntaxLevel>
      </SyntaxTitleBox>
      <SyntaxSummary>{summary}</SyntaxSummary>
      <SyntaxStartButton onClick={() => {}}>시작하기!</SyntaxStartButton>
    </SyntaxSelectContainer>
  );
}

export default SyntaxSelectComponent;
