import React, { Component } from 'react';
import { withAuthorization } from './Session';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            events: {}

        }
    }
    componentDidMount() {
        let idArr = [];
        this.setState({ loading: true });
        this.props.firebase.events().on('value', snapshot => {
          idArr = Object.keys(snapshot.val());
          this.setState((prevState) => {
            return {
              ...prevState,
              events: snapshot.val(),
            }
          });
          const tableBody = document.getElementById("tableBody");
          idArr.forEach((id) => {
    
            const {
              title,
              brief,
              description,
              imgsrc,
              date,
              time,
              price,
              organizer,
            } = this.state.events[id];
    
            let tableRow = document.createElement("tr");

            tableRow.innerHTML = `
            <th scope="row">${title}</th>
            <td>${date}</td>
            <td>${description}</td>
            <td eventID=${id}>
                <span eventID=${id} class="badge badge-danger">Delete</span>
            </td>
            `
            tableBody.appendChild(tableRow);
          })
        });
    
    
    }

    componentWillUnmount() {
        this.props.firebase.events().off();
    }

    render() {

        return (
            <div>

                <h1>Events</h1>

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
                    </tbody>
                </table>
            </div>
        );
    }

}


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Events);