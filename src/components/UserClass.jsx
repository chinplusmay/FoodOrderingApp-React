import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
        this.state = {   // state variable(s) in class based cmp
            cnt:0,
            cnt1:1,
        }   
    }
    componentDidMount() {
    console.log("Child Component mounted!");
  }

    render(){
        const {name, location, contact} = this.props; // need to use this.props in class based comp
        const {cnt, cnt1} = this.state; // need to use this.state.varName to access state var
        
        return(
        <div className="user-card" >
            <h1>Count: {cnt}</h1>
            <button onClick={() => {
                //NEVER UPDATE STATE VAR DIRECTLY LIKE
                //this.state.count = this.state.count+1
                // use this.setState()
                this.setState({
                    cnt: this.state.cnt + 1,
                    cnt1:this.state.cnt1 + 1
                })
            }} >increase</button>
            <h1>Count1: {cnt1}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: {contact}</h2> 
        </div>
    )
    }
}

export default UserClass; 