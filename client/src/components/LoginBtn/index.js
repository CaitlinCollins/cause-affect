import React from "react";

export function LoginBtn(props) {
    return (
      <button {...props} className="btn loginBtn">
        {props.children}
      </button>
    );
  }

export default LoginBtn;