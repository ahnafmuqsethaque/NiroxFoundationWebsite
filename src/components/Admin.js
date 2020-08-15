import React, { Component } from "react";
import { compose } from "recompose";

import { withFirebase } from "./Firebase";
import { withAuthorization } from "./Session";
import * as ROLES from "./../constants/roles";
import Userlist from "./Userlist";

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: [],
    };
  }



  render() {

return(
  <Userlist />
)
  }
}

// const UserList = ({ users }) => (
//   <ul>
//     {users.map((user) => (
//       <li key={user.uid}>   
//         <span>
//           <strong>E-Mail:</strong> {user.email}
//         </span>

//         <span>
//           <strong> Username:</strong> {user.username}
//         </span>
//       </li>
//     ))}
//   </ul>
// );

const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];
 
export default compose(
  withAuthorization(condition),
  withFirebase,
)(AdminPage);
