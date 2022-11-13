import { BadgeIconContainer, BadgeText, StyledBadge } from "components/common/Badge/styles";
import React from "react";
import { Link } from "react-router-dom";
import TagIcon from "../icons/TagIcon";

function Badge({ IconComponent, children, language, syntax, ...props }) {
  
  let linkURL;
  
  if(IconComponent === TagIcon) {
    linkURL = "/" + children;
  }

  else {
    linkURL = "/" + language + "/" + syntax;
  }

  
  return (
    <StyledBadge {...props}>
      <BadgeIconContainer>
        <IconComponent />
      </BadgeIconContainer>
      <Link to={linkURL}>
        <BadgeText>{children}</BadgeText>
      </Link>
    </StyledBadge>
  );
}

export default Badge;
