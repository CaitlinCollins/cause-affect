import React from "react";
// import RegisterContext from "../../utils/registerContext";

export function RegisterOrgBtn(props) {
    return (
      <button {...props} className="btn loginBtn">
        {props.children}
      </button>
    );
  }

export default RegisterOrgBtn;