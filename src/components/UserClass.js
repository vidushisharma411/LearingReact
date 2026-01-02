import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

       
        this.state ={
          userInfo:{
            name: "hgj" ,
            location: "hkdh"
          },
        };

        // console.log("child constructor")
    }
    async componentDidMount(){
          // console.log("child did mount")
          const data = await fetch("https://api.github.com/users/akshaymarch7");
          const json = await data.json();
          console.log(json);

          this.setState({
            userInfo:json,
          })
        }
  render() {
    const{name, location} = this.state.userInfo;
// console.log("child render")
    return ( 
      
      <div className="user-card">
        
        <h2>Name{name}</h2>
        <h3>Location:{location}</h3>
        <h4>Contact:vidshi@hdhkh</h4>
     
      
      </div>
    );
  };
};



export default  UserClass ;
