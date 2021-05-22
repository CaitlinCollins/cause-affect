import React from "react";

export function LoginOrgBtn(props) {
    return (
      <button {...props} className="btn loginBtn">
        {props.children}
      </button>
    );
  }

export default LoginOrgBtn;