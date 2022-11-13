import React from "react";
import TadakLogo from "assets/svgs/tadak_logo.svg";
import { LogoContainer } from "components/common/Logo/styles";

function Logo(variant = "small") {
  return <LogoContainer src={TadakLogo} alt="tadak-logo" variant={variant} />;
}

export default Logo;
