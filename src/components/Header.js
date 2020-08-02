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
                                <h4 class="w-50 position-absolute text-danger mt-4 mr-5 pr-5">This is also<br />available on your mobile.</h4>
                            </div>
                        </section>
                    </div>

                </header>
                {/* <div class="row">
                    <div class="col-sm-4"><h3>NIROX Sculpture Park</h3></div>
                    <div class="col-sm-8">stuff 2</div>
                </div> */}


                <nav class="navbar navbar-light bg-light">
                    <h3>NIROX Sculpture Park</h3>
                    {/* <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    <span>Hello</span>
                    <span>Hello</span>
                </nav>



                <div class="row">
                    <div class="col-sm-3">Details</div>
                    <div class="col-sm-9"><p>sdfsdnkjsg
                        sldkfjgkdsjg
                        ldksfjgklsdfjgks
                        iskdljfkdsfkn
                        kljasdfkls</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Information</div>
                    <div class="col-sm-9"><p>sdfsdnkjsg
                        sldkfjgkdsjg
                        ldksfjgklsdfjgks
                        iskdljfkdsfkn
                        kljasdfkls</p></div>
                </div>
                <div class="row">
                    <div class="col-sm-3">Organizer</div>
                    <div class="col-sm-9"><p>Nirox</p></div>
                </div>
            </div>
        );
    }

}

export default Header;