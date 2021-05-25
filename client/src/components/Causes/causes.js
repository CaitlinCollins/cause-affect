import React from "react";
import "../../App.scss";
import AwIcon from "awicons-react";


function Causes(props){
    
    return (
        <div id="select-causes">
            <label><input type="radio" name="causes" value={props.value} /><span className="cause-title">{props.title}</span></label>
            <AwIcon id="cause-image" className="icon" iconName={props.img}/>
        </div>
        
 )

}

export default Causes;