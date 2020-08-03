import React, { Component } from 'react';

class Events extends Component {
    state = {
        events: ["event 2", "event 45","event 100000"]
    }
    render() {


        return (
            <div>
                <div>
                    <img src="file:///Users/ahnafmuqsethaque/dog.jpg" width="1000" height="600" />
                </div>
                {
                this.state.events.map((item,index) => {
                    return (
                    <div>
                        <h1>{item}</h1>
                    </div> 
                    )
                })
            }
                <div>
                    <h1>Events 2</h1>
                </div>
                <div>
                    <h1>Events 3</h1>
                </div>
            </div>
        );
    }

}

export default Events;