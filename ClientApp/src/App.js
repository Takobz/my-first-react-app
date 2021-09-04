import React, { Component } from 'react';
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.css'
import {getAllUsers, createUser} from './services/UserService';
import UserForm from './components/UserForm'
import { DisplayBoard } from './components/DisplayBoard';
import  Users  from './components/UsersTable'

class App extends Component {
  static displayName = "First React App.";

  state = {
    user: {},
    users: [],
    numberOfUsers: 0
  }

  myNewUser = (e) => {
    createUser(this.state.user)
    .then(response => {
      this.setState({numberOfUsers: this.state.numberOfUsers + 1})
    });
  }

  onChangeForm = (e) => {
    let user = this.state.user;
    if(e.target.name === 'firstname')
    {
      user.firstname = e.target.value;
    }
    else if(e.target.name === 'lastname')
    {
      user.lastname = e.target.value;
    }
    else if(e.target.name === 'email')
    {
      user.email = e.target.value;
    }
    this.setState({user})
  }

  getAllUsers = () => {
    getAllUsers()
    .then(users => {
      this.setState({users: users, numberOfUsers: users.length})
    });
  }

  //TODO: Add Table component.
  render () {
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
              <UserForm
              onChangeForm = {this.onChangeForm}
              createUser = {this.myNewUser}
              ></UserForm>
            </div>
            <div className="col-md-4">
              <DisplayBoard
              numberOfUsers={this.state.numberOfUsers}
              getAllUsers={this.getAllUsers}
              >
              </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={this.state.users}></Users>
        </div>
      </div>  
    );
  }
}
export default App;
