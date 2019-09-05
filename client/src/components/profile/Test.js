import React, { Component } from 'react';
import Toolbar from '../toolbar/toolbar';
import DeleteBtn from "../DeleteBtn/index";
import UpdateBtn from "../DeleteBtn/updateBtn";
import './profile.css';
import API from '../../utils/API';
import { Link } from "react-router-dom";
import { List, ListItem } from "../List/index";
import { Input, FormBtn } from "./testbtn";
class PostForm extends Component {
  state = {
    users: [],
    name: '',
    age: '',
    gender: '',
    state: '',
    hobbies: '',
    email: '',
    id: ''
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, name: "", age: "", gender: "", state: "", hobbies: "", email: "", _id: "" }

        ))


      .catch(err => console.log(err));

  };

  //try to update users
  updateUser = id => {
    API.updateUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  }

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.age) {
      API.saveUser({
        name: this.state.name,
        age: this.state.age,
        gender: this.state.gender,
        state: this.state.state,
        hobbies: this.state.hobbies,
        email: this.state.email,
        _id: this.state._id
      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    const { name, age, gender, state, hobbies, email, _id } = this.state

    return (
      <div class="profilepage">
        <Toolbar />
        <form onSubmit={this.handleFormSubmit} id="formbtn">
          <div id="name">
            <label>Name:  </label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="age">
            <label>Age:  </label>
            <Input
              type="text"
              name="age"
              value={age}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="gender">
            <label>Gender:  </label>
            <Input
              type="text"
              name="gender"
              value={gender}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="state">
            <label>State:  </label>
            <Input
              type="text"
              name="state"
              value={state}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="hobbies">
            <label>Hobbies:  </label>
            <Input
              type="text"
              name="hobbies"
              value={hobbies}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="email">
            <label>Email:  </label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <label>ID:  </label>
            <Input
              type="text"
              name="_id"
              value={_id}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="button">
            <FormBtn
              onClick={this.handleFormSubmit}
            >
              Submit User
              </FormBtn>
          </div>
        </form>





        {this.state.users.length ? (
          <List>
            {this.state.users.map(users => (
              <ListItem key={users._id}>
                <Link to={"/api/users/" + users._id}>
                  <strong>
                    Name: {users.name} Age: {users.age} ------- ID: {users._id}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => this.deleteUser(users._id)} />
                <UpdateBtn onClick={() => this.updateUser(users._id)} />
                {console.log()}

              </ListItem>
            ))}

          </List>
        ) : (
            <h3>No Results to Display</h3>
          )}


      </div>
    )
  }
}

export default PostForm