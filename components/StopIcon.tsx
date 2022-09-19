// @ts-ignore
import React from "react";
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon";
// @ts-ignore
import type { SvgIconProps } from "@mui/material/SvgIcon";

const StopIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <defs><clipPath id="a"><path d="M10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10 4.48 0 10 0ZM3.69 5.1A7.902 7.902 0 0 0 2 10c0 4.42 3.58 8 8 8 1.85 0 3.55-.63 4.9-1.69ZM10 2c-1.85 0-3.55.63-4.9 1.69L16.31 14.9A7.902 7.902 0 0 0 18 10c0-4.42-3.58-8-8-8Z"/></clipPath></defs><g clip-path="url(#a)" transform="translate(2 2)"><path fill="currentColor" d="M0 0h20v20H0V0z"/></g>
  </SvgIcon>
);

export default StopIcon;
