import React, {Component} from 'react'

class Home extends Component {

    componentDidMount() {
        console.log(this.props.user.username)
      }

    componentDidUpdate() {
        console.log(this.props.user.username)
    }
    render() {
        return (
            <div>Welcome to the home page</div>
        )
    }
}

export default Home