import { isPropsValid } from "@fullcalendar/common";
import React, {useState, useEffect} from "react";
import "../../App.scss";
import AwIcon from "awicons-react";


function Causes(props){

//     const [color, setColor] = useState("white");
//     const [checked, setChecked] = useState(false);

//     function handleoOnChange() {
//         if (!checked) {
//             setChecked(true)
//         }
//         else {
//             setChecked(false)
//         }
//     }

//     function changeColor(e) {
//         // var causeDiv = e.target;
//         // console.log(causeDiv)
//         // causeDiv.style.backgroundColor="white !important";
//         // console.log("Button was clicked");
//         if (checked) {
//             setColor("purple")
//         }
//         else {
//             setColor("white")
//         }
        
//     }

//     useEffect(changeColor, [checked])
    
    return (
        <div id="select-causes">
            <label><input type="radio" name="causes" value={props.value} /><span className="cause-title">{props.title}</span></label>
            <AwIcon id="cause-image" className="icon" iconName={props.img}/>
        </div>
        
 )

}

export default Causes;