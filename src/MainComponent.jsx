import React, {Component} from 'react';
import UserContainer from './containers/UserContainer'

export default class MainComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    menuClick(e){
        if(e.target.className){
            console.log("menu clicked----", e.target.className);
        }
    }//End-of-menuClick

    createUserBlocks(userLists){
        return userLists.map(this.createUserBlock)
    }//End-of-createUserBlocks

     createUserBlock(user){
        return(
            <div>
                <div className="userId">{user.id}</div>
                <div className="userName">{user.name}</div>
                <div className="userEmail">{user.email}</div>
            </div>
        )
    }//End-of-createUserBlock

    render(){
        return(
            <div>
                <div className="headerSection">
                    <ul className="navMenu">
                        <li onClick={this.menuClick.bind(this)}> Home</li>
                        <li onClick={this.menuClick.bind(this)}> Help</li>
                        <li className="data" onClick={this.menuClick.bind(this)}> Data</li>
                    </ul>
                </div>

                <div className="mainContainer">
                    <UserContainer prop1="propValue1"/>
                </div>
            </div>
        )
    }//End-of-render

}