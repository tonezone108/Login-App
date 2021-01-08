import React, {Component} from 'react'
// import { Button } from "@material-ui/core";

class Home extends Component {


    // use this to test the global state
    // componentDidMount() {
    //     console.log(this.props.testProp)
    //     console.log(this.props.user.username)
    //   }

    render() {
        return (
            <div>
                Welcome to the home page {this.props.user.username}
            </div>
            
        )
    }
}

export default Home