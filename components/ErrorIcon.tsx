// @ts-ignore
import React from "react";
// @ts-ignore
import SvgIcon from "@mui/material/SvgIcon";
// @ts-ignore
import type { SvgIconProps } from "@mui/material/SvgIcon";

const ErrorIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm-.021 13.877c-.38 0-.7.135-.961.405a1.36 1.36 0 0 0-.393.982c0 .44.137.783.41 1.028.274.246.595.368.962.368.36 0 .676-.124.947-.372.27-.248.406-.59.406-1.024 0-.385-.134-.712-.401-.982a1.316 1.316 0 0 0-.97-.405Zm.072-10.56c-.427 0-.772.133-1.033.398-.262.265-.393.634-.393 1.108 0 .348.027.92.081 1.72l.29 4.097c.053.53.143.926.27 1.185.126.26.352.39.677.39.318 0 .547-.135.685-.403.139-.268.229-.653.271-1.155l.388-4.217c.042-.388.063-.77.063-1.147 0-.639-.087-1.128-.262-1.467-.174-.34-.52-.51-1.037-.51Z" fill="currentColor" fill-rule="evenodd" fill-opacity=".86"/>
  </SvgIcon>
);

export default ErrorIcon;
