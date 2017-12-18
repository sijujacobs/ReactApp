import React, {Component} from 'react';
import axios from 'axios';

export default class UserComponent extends Component{

    constructor(props){
        super(props);
        console.log("UserComponent :: props : " , props);

        this.state = {
            users : []
        }
    }

    componentWillMount(){
        // axios.get("http://jsonplaceholder.typicode.com/users")
        //     .then(({results:users}) => this.setState(users))
        let uComponent = this;
        axios.get("http://jsonplaceholder.typicode.com/users")
            .then(function(response){
                console.log("UserComponent :: componentWillMount : axiosResponse : " , response.data);
                uComponent.setState({
                    users : response.data
                })
            })
            .catch(function(error){
                    console.log("Error clicked----", error);
            })
    }

    filter(e){
        this.setState({
            filter : e.target.value
        })
    }
    
    render(){
        let users = this.state.users;

        if(this.state.filter){
            users = users.filter(
                user => user.name.toLowerCase()
                .includes(this.state.filter.toLowerCase())
            )
        }

        return(
            <div>
                <div className="searchComponent"> <span>Search </span> <input type="text" onChange={this.filter.bind(this)} /> </div>
                {users.map(user => 
                <div key={user.id}>
                    <span className="userId"> {user.id}</span>
                    <span className="userName"> {user.name}</span>
                    <span className="userEmail"> {user.email}</span>
                </div>
                )}
            </div>
        )
    }
}