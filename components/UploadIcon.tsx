// @ts-ignore
import React from "react";
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon";
// @ts-ignore
import type { SvgIconProps } from "@mui/material/SvgIcon";

const UploadIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <defs><clipPath id="a"><path d="M2 11v3h12v-3h2v3c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2v-3h2ZM8 0l5 5-1.41 1.41L9 3.83V12H7V3.83L4.41 6.41 3 5l5-5Z"/></clipPath></defs><g clip-path="url(#a)" transform="translate(4 4)"><path fill="currentColor" d="M0 0h16v16H0V0z"/></g>
  </SvgIcon>
);

export default UploadIcon;
