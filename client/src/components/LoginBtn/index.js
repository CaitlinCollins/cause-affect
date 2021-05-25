import React from "react";
// button for login page
export function LoginBtn(props) {
    return (
      <button {...props} className="btn loginBtn">
        {props.children}
      </button>
    );
  }

export default LoginBtn;