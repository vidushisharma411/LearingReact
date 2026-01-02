import User from "./User";
import USerClass from "./USerClass";
import { Component } from "react";


class About extends Component {
    constructor(props){
        super(props)

        // console.log("constructor")
    }

    componentDidMount(){
        // console.log("didmount")
    };
    render(){

        console.log("render")
          return (
        <div>
            <h2>Oooops!!!</h2>
            <h4>something went wrong</h4>
            <USerClass name={"Vidushi Kaushishval"}location={"Saharanpur"} />
        </div>
    );
    
    }
 
}




export default About ;