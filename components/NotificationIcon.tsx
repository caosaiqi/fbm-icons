// @ts-ignore
import React from "react";
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon";
// @ts-ignore
import type { SvgIconProps } from "@mui/material/SvgIcon";

const NotificationIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M4 18.01a.99.99 0 0 1 .99-.99H6.1V9.85c0-1.367.413-2.604 1.238-3.712A5.29 5.29 0 0 1 10.6 4.05v-.725c0-.383.138-.7.412-.95.275-.25.605-.375.988-.375s.713.125.988.375c.274.25.412.567.412.95v.725c1.35.283 2.442.98 3.275 2.088.833 1.108 1.25 2.345 1.25 3.712v7.17h1.085a.99.99 0 1 1 0 1.98H4.99a.99.99 0 0 1-.99-.99ZM12 22c-.533 0-1-.196-1.4-.587-.4-.392-.6-.863-.6-1.413h4c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 12 22Z" fill="currentColor" fill-rule="evenodd" fill-opacity=".86"/>
  </SvgIcon>
);

export default NotificationIcon;