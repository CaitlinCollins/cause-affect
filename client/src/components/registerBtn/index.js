import React, { useContext } from "react";
import RegisterContext from "../../utils/registerContext";

function RegisterBtn(props){
    const { handleBtnClick } = useContext(RegisterContext);
    return(
        <button onClick={handleBtnClick}
        className={`btn loginBtn ${props["data-value"]}`}{...props}>Register</button>
    );
}

export default RegisterBtn;