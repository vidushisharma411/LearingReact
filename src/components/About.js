import User from "./User";
import USerClass from "./USerClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("constructor")
  }

  componentDidMount() {
    // console.log("didmount")
  }
  render() {
    console.log("render");
    return (
      <div>
        <h2>
          <b>About Us</b>
        </h2>
        <p>
          Founded with a love for great food and smart technology, it
          is designed to simplify how people discover
          restaurants. We focus on quality, user experience, and trusted ratings
          to help you make better food choices, every day.
        </p>
        <h4></h4>
        <USerClass name={"Vidushi Sharma"} location={"Saharanpur"} />
      </div>
    );
  }
}

export default About;
