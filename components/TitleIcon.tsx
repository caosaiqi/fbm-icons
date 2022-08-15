// @ts-ignore
import React from "react";
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon";
// @ts-ignore
import type { SvgIconProps } from "@mui/material/SvgIcon";

const TitleIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill="currentColor" d="M5 4v3h5.5v12h3V7H19V4z" fill-rule="evenodd" fill-opacity=".86"/>
  </SvgIcon>
);

export default TitleIcon;
