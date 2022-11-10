import { BadgeIconContainer, BadgeText, StyledBadge } from "components/common/Badge/styles";
import React from "react";

function Badge({ IconComponent, children, ...props }) {
  return (
    <StyledBadge {...props}>
      <BadgeIconContainer>
        <IconComponent />
      </BadgeIconContainer>
      <BadgeText>{children}</BadgeText>
    </StyledBadge>
  );
}

export default Badge;
