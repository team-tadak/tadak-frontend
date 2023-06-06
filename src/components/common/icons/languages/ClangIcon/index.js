import React from 'react';
import ClangPng from 'assets/pngs/C_Logo.png';
import styled from '@emotion/styled';

const Icon = styled.img`
  width: 32px;
`;

export default function ClangIcon() {
  return <Icon src={ClangPng} />;
}
