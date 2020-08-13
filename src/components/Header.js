import React, { Component } from 'react';
import { withFirebase } from "./Firebase";

import "../styles/header.css";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const eventID = urlParams.get('eventId');


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            event: {},
            eventID: eventID,
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.events().on('value', snapshot => {


            this.setState((prevState) => {
                return {
                    ...prevState,
                    loading: false,
                    event: snapshot.val()[eventID],
                }
            })
        })
    }

    componentWillUnmount() {
        this.props.firebase.events().off();
    }

    render() {
        const {
            title,
            brief,
            description,
            imgsrc,
            date,
            time,
            price,
            organizer,
        } = this.state.event;
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
                    <p>Time: {time} </p>
                    <p>Price: {price} </p>
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
                    {/* <p>Tickets available from:</p>
                    <p>www.unathi.co</p>
                    <p>www.niroxarts.com</p> */}
                    <br />
                    <p>NIROX is an outdoor venue and therefore subject to the weather. While every care is taken to
                                ensure the performance, in the event of inclement weather any change in plans will be communicated.
                                      No refunds.</p>
                    <p>Children must be under adult supervision at all times. Entry to the park is at your own risk.</p>
                    <p>NIROX is not responsible for any loss, injury or damage.</p>
                    <p><strong>Organized by:</strong>{organizer}</p>
                    <a href="/reservations" class="btnh">
                        Book Now
                  </a>
                </div>
            </div>
        );
    }

    // render() {


    //     return (
    //         
    //             </header>

    //             {/* <div class="row">
    //                 <div class="col-sm-3"><h3>NIROX Sculpture Park</h3></div>
    //                 <div>|</div>
    //                 <div class="col-sm-3">stuff 2</div>
    //                 <div>|</div>
    //                 <div class="col-sm-3">stuff 3</div>
    //             </div> */}


    //             <nav class="navbar navbar-light bg-secondary">
    //                 <div class="col-sm-3">

    //                     <div class="row">
    //                         <div class="col-sm-1">
    //                             <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    //                                 <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    //                             </svg>
    //                         </div>
    //                         <div class="col-sm-11">
    //                             <h3>NIROX Sculpture Park</h3>
    //                         </div>
    //                     </div>
    //                 </div>


    //                 <div>|</div>

    //                         <div class="col">9 AUG 2020 SAST (+02:00)</div>


    //                     </div>


    //                 </div>


    //                 <div>|</div>

    //                 <div class="col-sm-3">
    //                     <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buy Tickets</button>
    //                 </div>


    //             </nav>

    //             <div class="row">
    //                 <div class="col-sm-4"><h1><strong>Details</strong></h1></div>

    //                 <div class="col-sm-8">

    //                     <p>Unathi &amp; Friends at NIROX Sculpture Park</p>
    //                     <p>{this.state.events.description}</p>

    //                     <p>Tickets available from:</p>
    //                     <p>www.unathi.co</p>
    //                     <p>www.niroxarts.com</p>
    //                     <p>Doors open 10h00.</p>
    //                     <p>No food, drinks, pets, gazebos or sporting equipment may be brought into the park.</p>
    //                     <p>GPS Co-Ordinates: S25°59' 09.56'' E27° 46' 59.17"</p>
    //                     <p>Guest numbers are limited. Early bookings strongly advised to avoid disappointment.</p>

    //                     {/*<p><br /></p><h4><strong>NEW DATE - SUNDAY 9 AUGUST 2020</strong></h4><h4><strong>WOMEN'S DAY</strong></h4>
    //                     <p><br /></p><p>Sunday 9 August 2020 - Women's Day</p>
    //                     <p>Cradle of Humankind, Gauteng</p>
    //                     <p><br /></p>
    //                     <p>Following the postponement for sudden and unforeseen circumstances, singer-songwriter Unathi and her 10
    //                         Piece ensemble have rescheduled to perform the concert with a program of musical collaborators in the
    //                         outdoor amphitheatre of NIROX Sculpture Park on <u>Sunday 9 August 2020</u>
    //                         to celebrate Women's Day and the launch of Unathi's new album.</p>
    //                     <p><br /></p>
    // <p>It will still be a day of music, food and art in nature, for the whole family.
    // Epic festival cuisine by the Epicurean Emporium - a selection of traders from the food &amp;
    //         design markets in and around Johannesburg.
    // </p>
    //                     <p><br /></p>
    //                     <p>Bernie’s Bar and Flowstone Gin Bar will keep guests hydrated.</p>
    //                     <p><br /></p>


    //                     <p>Adults: R250 online; R300 at the entrance - subject to availability</p>
    //                     <p>Children under 12 enter free of charge</p>
    //                     <p>Pensioners &amp; students with a valid student card : R200 - only available at the entrance</p>
    //                     <p><br /></p>


    //                     <p><br /></p>
    //                     <p>Mzansi Magic is the official media partner of Unathi &amp; Friends performance at NIROX .</p>
    //                     <p><br /></p>*/}
    //                     <p><br /></p>

    //                 </div>


    //             </div>

    //             <div class="row">
    //                 <div class="col-sm-3"><h1><strong>Information</strong></h1></div>
    //                 <div class="col-sm-9">
    //                     <p>NIROX is an outdoor venue and therefore subject to the weather. While every care is taken to
    //                             ensure the performance, in the event of inclement weather any change in plans will be communicated.
    //                                  No refunds.</p>
    //                     <p>Children must be under adult supervision at all times. Entry to the park is at your own risk.</p>
    //                     <p>NIROX is not responsible for any loss, injury or damage.</p>

    //                 </div>
    //             </div>
    //             <div class="row">
    //                 <div class="col-sm-3"><h1><strong>Organizer</strong></h1></div>
    //                 <div class="col-sm-9"><p><h1>Nirox</h1></p></div>
    //             </div>

    //         </div>
    //     );
    // }


}

export default withFirebase(Header);
