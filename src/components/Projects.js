import React from 'react';
import { withAuthorization } from './Session';

function Projects() {

    return(
        <div>
            <h1>Projects</h1>
        </div>
    )

}

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Projects);