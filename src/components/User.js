import { useState } from "react";

const User = (props) => {

    const[count] = useState(0);
    const[count2] = useState(2)
return(
    <div className="user-card">
        {/* <h2>Name:{props.name}</h2>
        <h3>{count}{count2}</h3>
        <h3>Location:Behat</h3>
        <h4>Contact:vidshi@hdhkh</h4> */}
    </div>
);
};


export default User ;