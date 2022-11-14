import React from "react";

function MessageIcon() {
  return (
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_307_841)">
        <rect x="5" y="6" width="16" height="12" rx="2" stroke="white" />
        <path
          d="M5 9L12.1056 12.5528C12.6686 12.8343 13.3314 12.8343 13.8944 12.5528L21 9"
          stroke="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_307_841"
          x="-3"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_307_841" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_307_841"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default MessageIcon;
