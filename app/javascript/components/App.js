import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from "./Users/Users";
import User from "./User/User";
import Posts from "./Posts/Posts";
import Post from "./Post/Post";
import { Navbar } from "./Navbar";
import { SignUpPage } from "./Auth/SignUpPage";
import { Profile } from "./Profile";
import { LoginPage } from "./Auth/LoginPage";
import { render } from "react-dom/cjs/react-dom.production.min";

export default class App extends Component{
    render(){
    return (
        <BrowserRouter>
        <Navbar />
        <div className="container">
        <Switch>
            <Route 
            exact 
            path="/"
            component={Posts}
             />
            <Route exact path="/posts/:id" component={Post}/>
            <Route exact path="/users" component={Users}/>
            <Route exact path="/users/:id" component={User}/>
            <Route exact path="/sign_up" component={SignUpPage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/profile" component={Profile}/>
        </Switch>
        </div>
        </BrowserRouter>
    )}
}
