// @ts-ignore
import React from "react";
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon";
// @ts-ignore
import type { SvgIconProps } from "@mui/material/SvgIcon";

const DragHandleIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M19 9H5a1 1 0 1 0 0 2h14a1 1 0 0 0 0-2ZM5 15h14a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2Z" fill="currentColor" fill-rule="evenodd" fill-opacity=".86"/>
  </SvgIcon>
);

export default DragHandleIcon;
