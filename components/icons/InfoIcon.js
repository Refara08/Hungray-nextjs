import * as React from "react";

function InfoIcon(props) {
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
      <path d="M11 11H13V17H11zM11 7H13V9H11z" />
    </svg>
  );
}

export default InfoIcon;
