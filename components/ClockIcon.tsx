// @ts-ignore
import React from "react";
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon";
// @ts-ignore
import type { SvgIconProps } from "@mui/material/SvgIcon";

const ClockIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 3.87c-.71 0-1.286.576-1.286 1.286V12l.016.202c.043.266.168.514.36.707l3 3 .145.125a1.286 1.286 0 0 0 1.674-.125l.125-.144a1.286 1.286 0 0 0-.125-1.674l-2.623-2.624v-4.31l-.012-.175A1.286 1.286 0 0 0 12 5.87Z" fill="currentColor" fill-rule="evenodd" fill-opacity=".86"/>
  </SvgIcon>
);

export default ClockIcon;
