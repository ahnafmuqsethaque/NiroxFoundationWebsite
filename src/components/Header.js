import React, { Component } from 'react';

class Header extends Component {
    render() {


        return (
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
        );
    }

}

export default Header;