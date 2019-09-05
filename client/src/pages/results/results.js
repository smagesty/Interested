import React, { Component } from "react";
import Toolbar from "../../components/toolbar/toolbar";
import ControlledOpenSelect from "../../components/gen/gen";


class Results extends Component {
 constructor() {
   super();
    this.state = {
        users: []
      }
    }
      componentDidMount() {
        fetch('/api/users')
        .then(res => res.json())
        .then(users => this.setState({users}, () => console.log("Matches Fetched", users)))
        .catch(console.log)
      }


    render() {
        return (
         
            <div className="results">
                <div className="results-header">
                    <Toolbar></Toolbar>
                    <ControlledOpenSelect></ControlledOpenSelect>
                </div>

<ul>
  {this.state.users.map(users =>
    <li key={users.id}>{ users.name } {users.age} { users.email } {users.hobbies} {users.state} {users.gender} {users._id}</li>
    )}
</ul>

            </div>
        );
    }
 }
 export default Results;