// @ts-ignore
import React from "react";
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon";
// @ts-ignore
import type { SvgIconProps } from "@mui/material/SvgIcon";

const ClockCircleIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2.642a.667.667 0 0 0-.667.667V12l.009.105a.667.667 0 0 0 .187.366l1.666 1.667.093.077c.26.18.619.154.85-.077l.077-.092a.667.667 0 0 0-.077-.85l-1.471-1.472V9.309l-.011-.12A.667.667 0 0 0 12 8.642Z" fill="currentColor" fill-rule="evenodd" fill-opacity=".86"/>
  </SvgIcon>
);

export default ClockCircleIcon;
