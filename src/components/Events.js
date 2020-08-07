import React, { Component } from 'react';
import { withAuthorization } from './Session';

class Events extends Component {
    render() {


        return (
            <div>
                <div>
                    <img src="file:///Users/ahnafmuqsethaque/dog.jpg" width="1000" height="600" />
                </div>
                <div>
                    <h1>Events 2</h1>
                    <p>event desc....</p>
                </div>
                <div>
                    <h1>Events 3</h1>
                </div>
            </div>
        );
    }

}


const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Events);