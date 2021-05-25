import React from "react";

// register user button
export function RegisterBtn(props) {
  return (
    <button {...props} className="btn loginBtn">
      {props.children}
    </button>
  );
}

export default RegisterBtn;
