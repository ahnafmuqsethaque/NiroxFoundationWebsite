import React, { Component } from 'react';
import { withFirebase } from "./Firebase";

const qs = window.location.search;
const urlParam = new URLSearchParams(qs);
const projectID = urlParam.get('projectId');


class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            project: {},
            projectID: projectID,
        }
        
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.projects().on('value', snapshot => {

            this.setState((prevState) => {
                return {
                    ...prevState,
                    loading: false,
                    project: snapshot.val()[projectID],
                }
            })

        })
    }

    componentWillUnmount() {
        this.props.firebase.projects().off();
    }

    render() {
        const {
            title,
            brief,
            description,
            imgsrc,
            date,
            location,
            organizer,
        } = this.state.project;
        return (
            <div class="row">
                <div class="column">
                    <img
                        src={imgsrc}
                        class="responsive"
                        alt="..."
                    />
                </div>
                <div class="column" id="info">
                    <h1 class="breathe">{title}</h1>
                    <p>Date: {date} </p>
                    <p>Location: {location} </p>
                    <p>
                        {brief}
                        {/* Wandile Mabaso, a Soweto-born food artist with Michelin star
                        training, has created a unique dining experience that you can enjoy
                        at CAPSULE — an experiment with ingredients and flavours, drawing
                        inspiration from nature */}
                    </p>
                    <p>
                        {description}
                        {/* It will still be a day of music, food and art in nature, for the whole family.
                              Epic festival cuisine by the Epicurean Emporium - a selection of traders from the food &amp;
                                      design markets in and around Johannesburg. */}
                    </p>

                    <br />
                    {/* <p>NIROX is an outdoor venue and therefore subject to the weather. While every care is taken to
                                ensure the performance, in the event of inclement weather any change in plans will be communicated.
                                      No refunds.</p>
                    <p>Children must be under adult supervision at all times. Entry to the park is at your own risk.</p>
                    <p>NIROX is not responsible for any loss, injury or damage.</p> */}
                    <p><strong>Organized by:</strong>{organizer}</p>
                    <a href="/reservations" class="btnh">
                        Get Involved
                  </a>
                </div>
            </div>
        );
    }


}

export default withFirebase(Project);
