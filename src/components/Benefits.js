import React, { Component } from 'react';

import '../styles/benefits.css';

class Benefits extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }

    // componentDidMount() {
    //     this.setState({loading : true});
    //     this.props.firebase.<name of user api>.on('value', snapshot => {
    //         const temp = snapshot.val();

    //             this.setState({
    //                 nirox: temp,
    //                 loading: false,
    //             });
    //     }) 

    // }

    // componentWillMount() {
    //     this.props.firebase.<name of user api>.off();

    // }
    render() {


        return(
            <div>
                <h1 class="headline" >Benefits</h1>
            </div>
        )
    }


}

export default Benefits;