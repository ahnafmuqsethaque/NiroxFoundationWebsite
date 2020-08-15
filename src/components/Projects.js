import React, { Component } from 'react';
import { withAuthorization } from './Session';
import "../styles/events.css";



class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            projects: [],
            canDelete: false,
            currProjectID: '',
        }
    }
    componentDidMount() {

        let projectsArr = [];
        this.setState({ loading: true });

        this.props.firebase.projects().on('value', snapshot => {
            if (snapshot.val()) {
                let idArr = Object.keys(snapshot.val());
                idArr.forEach((id) => {
                    projectsArr.push(snapshot.val()[id])
                })
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        projects: projectsArr,
                    }
                });
            }

        });




    }

    componentWillUnmount() {
        this.props.firebase.projects().off();
    }

    deleteProject = (event) => {
        const projectID = event.target.getAttribute("projectID");

        if (this.state.canDelete && this.state.currProjectID === projectID) {
            this.props.firebase.project(projectID).remove();
            window.location.reload(false);
        }

        this.setState((prevState) => {
            return {
                ...prevState,
                currProjectID: projectID,
                canDelete: !prevState.canDelete,
            }
        })
    }


    render() {
        const {
            projects
        } = this.state;

        return (
            <div>

                <h1>Projects</h1>

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


                        {projects.map((project) => {

                            return (

                                <tr>
                                    <th scope="row">{project.title}</th>
                                    <td>{project.date}</td>
                                    <td>{project.description}</td>
                                    <td projectID={project.id}>
                                        <button projectID={project.id} onClick={this.deleteProject} type="button" class="btn btn-outline-danger" data-toggle="modal" data-target={(this.state.canDelete && project.id === this.state.currProjectID) ? "#" : "#projectModal"}>Delete</button>
                                    </td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>


                <div class="modal fade" id="projectModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Delete project</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Note: Once this project is deleted, changes <strong>cannot</strong> be undone
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


const condition = authUser => !!authUser;

export default withAuthorization(condition)(Projects);