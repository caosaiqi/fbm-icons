// @ts-ignore
import React from "react";
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon";
// @ts-ignore
import type { SvgIconProps } from "@mui/material/SvgIcon";

const CancelIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 4c4.42 0 8 3.58 8 8s-3.58 8-8 8-8-3.58-8-8 3.58-8 8-8Zm2.667 4.444L12 11.111 9.333 8.444a.629.629 0 0 0-.889.89L11.111 12l-2.667 2.667a.629.629 0 0 0 .89.889L12 12.889l2.667 2.667a.629.629 0 0 0 .889-.89L12.889 12l2.667-2.667a.629.629 0 0 0-.89-.889Z" fill="currentColor" fill-rule="evenodd" fill-opacity=".86"/>
  </SvgIcon>
);

export default CancelIcon;
