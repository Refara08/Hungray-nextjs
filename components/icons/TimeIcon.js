import * as React from "react";

function TimeIcon(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      height={props.size}
      width={props.size}
      {...props}
    >
      <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z" />
      <path d="M13 7L11 7 11 12.414 14.293 15.707 15.707 14.293 13 11.586z" />
    </svg>
  );
}

export default TimeIcon;
