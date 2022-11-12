import React from "react";
import { StyledBreadcrumb, BreadcrumbColor, BreadcrumbShown } from "components/common/Breadcrumb/styles";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  return (
    <StyledBreadcrumb>
      <BreadcrumbShown status={location.pathname.startsWith("/") ? "shown" : "notShown"}>
        <Link to="/">
          <BreadcrumbColor
            status={
              !location.pathname.startsWith("/languageselect")
                ? "breadcrumb-active"
                : "breadcrumb-not-active"
            }
          >
            ttdtt
          </BreadcrumbColor>
        </Link>
      </BreadcrumbShown>
      <BreadcrumbShown status={location.pathname.startsWith("/python") ? "shown" : "notShown"}>
        <Link to="/python">
          <span className="breadcrumb-arrow">&gt;</span>
          <BreadcrumbColor
            status={
              !location.pathname.startsWith("/python/typePage")
                ? "breadcrumb-active"
                : "breadcrumb-not-active"
            }
          >
            python
          </BreadcrumbColor>
        </Link>
      </BreadcrumbShown>
      <BreadcrumbShown
        status={location.pathname.startsWith("/python/typePage") ? "shown" : "notShown"}
      >
        <Link>
          <span className="breadcrumb-arrow">&gt;</span>
          <BreadcrumbColor status="breadcrumb-active">while.html</BreadcrumbColor>
        </Link>
      </BreadcrumbShown>
    </StyledBreadcrumb>
  );
}

export default Breadcrumbs;

