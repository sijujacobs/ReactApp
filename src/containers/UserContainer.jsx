import React, {Component} from 'react';
import UserComponent from '../components/UserComponent';
export default class UserContainer extends Component{
    
    render(){
        console.log("UserContainer :: props : " , this.props);
        return(
            <div>
                <UserComponent className="userComponent"/>
            </div>
        )
    }
}