import React from "react";

const RegisterContext = React.createContext({
  username: "",
  email: "",
  password: "",
  handleBtnClick: () => {}
});

export default RegisterContext;
