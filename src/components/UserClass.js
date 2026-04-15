import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name: "Raj patel",
                location: "Kanpur",
                avatar_url:"http://raj.com",
            }
        };
    };

    async componentDidMount(){
        
        //api call
        const data= await fetch("https://api.github.com/users/rajpatel110");
        const json= await data.json();

        this.setState({
            userInfo: json,
        });

    }

    render(){

        const {name, location, avatar_url} = this.state.userInfo;


        return(
            <div className="user-card border border-black p-4 rounded-lg shadow-md w-64 text-center bg-white">
                <img src={avatar_url}   className="w-28 h-28 rounded-full object-cover"/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Email: 341raj.patel@gmail.com</h4>
            </div>
        );
    }
}

export default UserClass;   