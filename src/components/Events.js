import React, { Component } from 'react';
import { withAuthorization } from './Session';
import * as ROLES from "../constants/roles";

import "../styles/events.css";


class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            events: [],
            canDelete: false,
            currEventID: '',
        }
    }
    componentDidMount() {

        let eventsArr = [];
        this.setState({ loading: true });

        this.props.firebase.events().on('value', snapshot => {
            if (snapshot.val()) {
                let idArr = Object.keys(snapshot.val());
                idArr.forEach((id) => {
                    eventsArr.push(snapshot.val()[id])
                })
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        events: eventsArr,
                    }
                });
            }

        });




    }

    componentWillUnmount() {
        this.props.firebase.events().off();
    }

    deleteEvent = (event) => {
        const eventID = event.target.getAttribute("eventID");

        if (this.state.canDelete && this.state.currEventID === eventID) {
            console.log("DELETEDDDDDDD")
            this.props.firebase.event(eventID).remove();
            window.location.reload(false);
        }

        this.setState((prevState) => {
            return {
                ...prevState,
                currEventID: eventID,
                canDelete: !prevState.canDelete,
            }
        })
    }

    // deleteEvent = () => {
    //     const {canDelete, currEventID} = this.state;
    //     if(canDelete) {
    //         console.log("DELETE HERE")
    //     }
    //     this.setState((prevState)=> {
    //         return {
    //             ...prevState,
    //             canDelete: false,
    //             currEventID: null,
    //         }
    //     })    
    // }

    render() {
        const {
            events
        } = this.state;

        return (
            <div>

                <h1 class="headline">Events</h1>

                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">


                        {events.map((event) => {

                            return (

                                <tr>
                                    <th scope="row">{event.title}</th>
                                    <td>{event.date}</td>
                                    <td>{event.description}</td>
                                    <td eventID={event.id}>
                                        <button eventID={event.id} onClick={this.deleteEvent} type="button" class="btn btn-outline-danger" data-toggle="modal" data-target={(this.state.canDelete && event.id === this.state.currEventID) ? "#" : "#eventModal"}>Delete</button>
                                    </td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>


                <div class="modal fade" id="eventModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
        );
    }

}


const condition = authUser =>
  authUser && !!authUser.roles[ROLES.ADMIN];

export default withAuthorization(condition)(Events);