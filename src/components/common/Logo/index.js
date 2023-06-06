import React from 'react';
import Image from 'next/image';

function Logo(variant = 'small') {
  return (
    <Image
      src={'/assets/svgs/tadak_logo.svg'}
      alt="tadak-logo"
      variant={variant}
      width={24}
      height={24}
    />
  );
}

export default Logo;
