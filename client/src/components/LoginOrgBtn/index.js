import React from "react";
// render login organization button
export function LoginOrgBtn(props) {
  return (
    <button {...props} className="btn loginBtn">
      {props.children}
    </button>
  );
}

export default LoginOrgBtn;
