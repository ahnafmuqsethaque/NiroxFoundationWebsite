import React, { Component } from 'react';

class Header extends Component {
    render() {


        return (
            <div>
                <header>
                    <div class="container-fluid p-0">
                        <section class="row no-gutters align-items-center">
                            <div class="col-12 text-center d-flex">
                                <img class="img-fluid of" src="https://images.unsplash.com/photo-1504853823479-80156a5aebb4?ixlib=rb-0.3.5&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;s=ff3076b05d9cb00914ce076bd2beedee&amp;auto=format&amp;fit=crop&amp;w=1900&amp;h=400&amp;q=80" />
                                <h4 class="w-50 position-absolute text-danger mt-4 mr-5 pr-5">We can put other<br />text right here</h4>
                            </div>
                        </section>
                    </div>

                </header>

                {/* <div class="row">
                    <div class="col-sm-3"><h3>NIROX Sculpture Park</h3></div>
                    <div>|</div>
                    <div class="col-sm-3">stuff 2</div>
                    <div>|</div>
                    <div class="col-sm-3">stuff 3</div>
                </div> */}


                <nav class="navbar navbar-light bg-secondary">
                    <div class="col-sm-3">

                        <div class="row">
                            <div class="col-sm-1">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-geo-alt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </div>
                            <div class="col-sm-11">
                                <h3>NIROX Sculpture Park</h3>
                            </div>
                        </div>
                    </div>


                    <div>|</div>

                    <div class="col-sm-3">
                        <div class="row">

                            <div class="col-sm-1">
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    <path fill-rule="evenodd" d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z" />
                                    <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </div>
                            <div class="col">9 AUG 2020 SAST (+02:00)</div>


                        </div>


                    </div>


                    <div>|</div>

                    <div class="col-sm-3">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buy Tickets</button>
                    </div>


                </nav>

                <div class="row">
                    <div class="col-sm-4"><h1><strong>Details</strong></h1></div>

                    {/* <div class="col-sm-9"><p>sdfsdnkjsg
                        sldkfjgkdsjg
                        ldksfjgklsdfjgks
                        iskdljfkdsfkn
                        kljasdfkls</p>
                        
                    </div> */}

                    {/* start adding paragraph*/}


                    <div class="col-sm-8">

                        <p>Unathi &amp; Friends at NIROX Sculpture Park</p>
                        <p><br /></p><h4><strong>NEW DATE - SUNDAY 9 AUGUST 2020</strong></h4><h4><strong>WOMEN'S DAY</strong></h4>
                        <p><br /></p><p>Sunday 9 August 2020 - Women's Day</p>
                        <p>Cradle of Humankind, Gauteng</p>
                        <p><br /></p>
                        <p>Following the postponement for sudden and unforeseen circumstances, singer-songwriter Unathi and her 10
                            Piece ensemble have rescheduled to perform the concert with a program of musical collaborators in the
                            outdoor amphitheatre of NIROX Sculpture Park on <u>Sunday 9 August 2020</u>
                            to celebrate Women's Day and the launch of Unathi's new album.</p>
                        <p><br /></p>
                        <p>It will still be a day of music, food and art in nature, for the whole family.
                        Epic festival cuisine by the Epicurean Emporium - a selection of traders from the food &amp;
                                design markets in and around Johannesburg.
                        </p>
                        <p><br /></p>
                        <p>Bernie’s Bar and Flowstone Gin Bar will keep guests hydrated.</p>
                        <p><br /></p>
                        <p>Tickets available from:</p>
                        <p>www.unathi.co</p>
                        <p>www.niroxarts.com</p>
                        <p><br /></p>
                        <p>Doors open 10h00.</p>
                        <p>Adults: R250 online; R300 at the entrance - subject to availability</p>
                        <p>Children under 12 enter free of charge</p>
                        <p>Pensioners &amp; students with a valid student card : R200 - only available at the entrance</p>
                        <p><br /></p>
                        <p>Guest numbers are limited. Early bookings strongly advised to avoid disappointment.</p>
                        <p>No food, drinks, pets, gazebos or sporting equipment may be brought into the park.</p>
                        <p><br /></p>
                        <p>Mzansi Magic is the official media partner of Unathi &amp; Friends performance at NIROX .</p>
                        <p><br /></p>
                        <p>GPS Co-Ordinates : S25°59' 09.56'' E27° 46' 59.17"</p>
                        <p><br /></p>
                        <p>NIROX is an outdoor venue and therefore subject to the weather. While every care is taken to
                            ensure the performance, in the event of inclement weather any change in plans will be communicated.
                                     No refunds.</p>
                        <p>Children must be under adult supervision at all times. Entry to the park is at your own risk.</p>
                        <p>NIROX is not responsible for any loss, injury or damage.</p>
                    </div>

                    {/* end adding paragraph*/}

                </div>





                <div class="row">
                    <div class="col-sm-3"><h1><strong>Information</strong></h1></div>
                    <div class="col-sm-9"><p>extra info goes here</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3"><h1><strong>Organizer</strong></h1></div>
                    <div class="col-sm-9"><p><h1>Nirox</h1></p></div>
                </div>

            </div>
        );
    }

}

export default Header;