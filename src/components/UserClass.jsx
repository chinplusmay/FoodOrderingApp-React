import React from "react";
import {GITHUB_USER_API} from "../utils/constants";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {   // state variable(s) in class based cmp
            userInfo: {
                name:"dummy",
                location: "Default",
                avatar_url: "http/dummy.png"
            }
        }   
    }
async componentDidMount() {
    const data = await fetch(
        GITHUB_USER_API + "chinplusmay"
    );
    const json = await data.json();
    // console.log(json);

    this.setState({
        userInfo : json,
    });

}

    render(){
        // const {name, location, contact} = this.props; // need to use this.props in class based comp
        const {name, location, avatar_url} = this.state.userInfo // need to use this.state.varName to access state var
        
        return(
        <div className="user-card" >
            <img src={avatar_url} alt="GitHub Avatar" />
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: {"cd@11"}</h2> 
        </div>
    );
    }
}

export default UserClass; 