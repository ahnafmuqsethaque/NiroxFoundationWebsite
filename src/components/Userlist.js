import React, { Component } from "react";
import { compose } from "recompose";

import { withFirebase } from "./Firebase";
import { withAuthorization } from "./Session";
import * as ROLES from "./../constants/roles";

let count;

class Userlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
            canDelete: false,
            currUserID: '',
        };
    }
    componentDidMount() {
        this.setState({ loading: true });

        this.props.firebase.users().on("value", (snapshot) => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map((key) => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState((prevState) => {

                return {
                    ...prevState,
                    users: usersList,
                    loading: false,
                }
            });
        });

        count = 1;
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    deleteUser = (event) => {
        const userID = event.target.getAttribute("userID");

        if (this.state.canDelete && this.state.currUserID === userID) {
            console.log("DELETEDDDDDDD")
            this.props.firebase.user(userID).remove();
            window.location.reload(false);
        }

        this.setState((prevState) => {
            return {
                ...prevState,
                currUserID: userID,
                canDelete: !prevState.canDelete,
            }
        })
        count = 1;
    }

    render() {
        const { users } = this.state;

        return (
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user) => (
                            <tr>
                                <th scope="row">{count++}</th>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td userID={user.uid}>
                                    <button userID={user.uid} onClick={this.deleteUser} type="button" class="btn btn-outline-danger" data-toggle="modal" data-target={(this.state.canDelete && user.uid === this.state.currUserID) ? "#" : "#userModal"}>Delete</button>
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>

                <div class="modal fade" id="userModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Delete event</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Note: Once this event is deleted, changes <strong>cannot</strong> be undone
                     </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}


const condition = authUser =>
    authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
    withAuthorization(condition),
    withFirebase,
)(Userlist);
