import React from "react";
import {
  StyledBreadcrumb,
  BreadcrumbColor,
  BreadcrumbShown,
  Arrow,
} from "components/common/Breadcrumb/styles";
import { Link, useLocation } from "react-router-dom";
import { SYNTAXES } from "constants/syntaxes";

function Breadcrumbs() {
  const location = useLocation();
  // url array, /python/1이면 ["python", "1"] 로 저장
  const locationArray = location.pathname.split("/").filter((entry) => entry !== "");
  const locArrLen = locationArray.length;
  // codeId가 있는 url이라면 codeId 반환, 없다면 undefined
  const codeId = locationArray[locArrLen - 1];
  // language있으면 language 반환, 없으면 undefined
  const language = locationArray[0];
  const firstUpLanguage = language.toLowerCase().replace(/\b[a-z]/g, function (letter) {
    return letter.toUpperCase();
  });
  // url이 특정 path로 시작하는지 확인하여 보여주고 안 보여주고 나눔(있는 이유는 languageselect 때도 breadcrumb이 나타나서)
  function UrlStartsWith(path) {
    return location.pathname.startsWith(path);
  }
  // style 관련 state 나타내는 varibles
  const SHOWN = "shown";
  const NOT_SHOWN = "notShown";
  const BREADCRUMB_ACTIVE = "breadcrumb-active";
  const BREADCRUMB_NOT_ACTIVE = "breadcrumb-not-active";
  const BREADCRUMB_ARROW = "breadcrumb-Arrow";

  return (
    <StyledBreadcrumb>
      <BreadcrumbShown
        status={locArrLen >= 0 ? (UrlStartsWith("/") ? SHOWN : NOT_SHOWN) : NOT_SHOWN}
      >
        <Link to="/languageselect">
          <BreadcrumbColor status={locArrLen === 0 ? BREADCRUMB_ACTIVE : BREADCRUMB_NOT_ACTIVE}>
            TTDTT
          </BreadcrumbColor>
        </Link>
      </BreadcrumbShown>
      <BreadcrumbShown
        status={
          locationArray.length >= 1
            ? !UrlStartsWith("/languageselect")
              ? SHOWN
              : NOT_SHOWN
            : NOT_SHOWN
        }
      >
        <Arrow className={BREADCRUMB_ARROW}>&gt;</Arrow>
        <Link to={`/${language}`}>
          <BreadcrumbColor status={locArrLen === 1 ? BREADCRUMB_ACTIVE : BREADCRUMB_NOT_ACTIVE}>
            {firstUpLanguage}
          </BreadcrumbColor>
        </Link>
      </BreadcrumbShown>
      <BreadcrumbShown
        status={
          locationArray >= 2
            ? UrlStartsWith(`/${language}/${codeId}`)
              ? SHOWN
              : NOT_SHOWN
            : NOT_SHOWN
        }
      >
        <Arrow className={BREADCRUMB_ARROW}>&gt;</Arrow>
        <Link>
          <BreadcrumbColor status={BREADCRUMB_ACTIVE}>
            {isNaN(parseInt(codeId))
              ? "error"
              : SYNTAXES[firstUpLanguage][parseInt(codeId) - 1]["title"]}
          </BreadcrumbColor>
        </Link>
      </BreadcrumbShown>
    </StyledBreadcrumb>
  );
}

export default Breadcrumbs;
