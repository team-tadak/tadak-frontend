import React from "react";
import {
  StyledBreadcrumb,
  BreadcrumbColor,
  BreadcrumbShown,
  Arrow,
} from "components/common/Breadcrumb/styles";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();
  return (
    <>
      {!(location.pathname === "/") && (
        <StyledBreadcrumb>
          <BreadcrumbShown status={location.pathname.startsWith("/") ? "shown" : "notShown"}>
            <Link to="/">
              <BreadcrumbColor
                status={
                  !location.pathname.startsWith("/python")
                    ? "breadcrumb-active"
                    : "breadcrumb-not-active"
                }
              >
                TTDTT
              </BreadcrumbColor>
            </Link>
          </BreadcrumbShown>
          <BreadcrumbShown status={location.pathname.startsWith("/python") ? "shown" : "notShown"}>
            <Arrow className="breadcrumb-Arrow">&gt;</Arrow>
            <Link to="/python">
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
            <Arrow className="breadcrumb-Arrow">&gt;</Arrow>
            <Link>
              <BreadcrumbColor status="breadcrumb-active">while.html</BreadcrumbColor>
            </Link>
          </BreadcrumbShown>
        </StyledBreadcrumb>
      )}
    </>
  );
}

export default Breadcrumbs;
