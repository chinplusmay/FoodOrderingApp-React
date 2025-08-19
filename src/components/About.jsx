import React from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }
    componentDidMount() {
    console.log("P Component mounted!");
  }

    render(){
        console.log("Parent Render")
        return(
            <div>
                <h1>About</h1>
                <h2>This is about page</h2>
                <UserClass name={"chin"} location={"ohio"} contact={"911"} />
                {console.log("Child1 Render")}
                <UserClass name={"doni"} location={"negro"} contact={"911"} />
                {console.log("Child1 Render")}


            </div>
        )
    }
}

 
export default About;