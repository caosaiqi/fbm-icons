// @ts-ignore
import React from "react";
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon";
// @ts-ignore
import type { SvgIconProps } from "@mui/material/SvgIcon";

const AlarmIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 4a9 9 0 1 1 0 18 9 9 0 0 1 0-18Zm0 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm1.025 2.495-.001 4.179 2.94 2.94-1.414 1.414-3.535-3.536.009-.01V8.495h2ZM17.907 2l4.096 2.868-1.147 1.638-4.096-2.868L17.907 2ZM6.096 2l1.147 1.638-4.096 2.868L2 4.868 6.096 2Z" fill="currentColor" fill-rule="evenodd" fill-opacity=".86"/>
  </SvgIcon>
);

export default AlarmIcon;
