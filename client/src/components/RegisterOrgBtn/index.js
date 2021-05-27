import React from "react";

// register Organization button
export function RegisterOrgBtn(props) {
  return (
    
    <button {...props} className="btn loginBtn">
      {props.children}
    </button>
   
  );
}

export default RegisterOrgBtn;
