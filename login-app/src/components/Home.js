import React, {Component} from 'react'
// import { Button } from "@material-ui/core";

class Home extends Component {

    componentDidMount() {
        console.log(this.props.testProp)
        console.log(this.props.user.username)
      }

    // componentDidUpdate() {
    //     console.log(this.props.user)
    // }

    // showTheState() {
    //     console.log(this.props.user)
    // }

    render() {
        return (
            <div>
                Welcome to the home page {this.props.user.username}
                {/* <Button onClick={this.showTheState}>Click me to check state</Button> */}
            </div>
            
        )
    }
}

export default Home