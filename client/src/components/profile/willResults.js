import React, { Component } from 'react';
import Toolbar from '../toolbar/toolbar';
import DeleteBtn from "../DeleteBtn/index";
import UpdateBtn from "../DeleteBtn/updateBtn";
import './profile.css';
import API from '../../utils/API';
import { List, ListItem } from "../List/index";
class PostForm2 extends Component {
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

  render() {

    return (
      <div class="profilepage">
        <Toolbar />
<div>
        {this.state.users.length ? (
          <List>
            {this.state.users.map(users => (
              <ListItem key={users._id}>
                  <div id = "button">
                    Name: {users.name} Age: {users.age} Gender: {users.gender} Hobbies: {users.hobbies}
                  </div>
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
      </div>
    )
  }
}

export default PostForm2