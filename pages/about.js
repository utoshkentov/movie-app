import React, {Component} from 'react'
//functional component
// const About = () => {
//     const a = "Hello World!";
//
//     return React.createElement('h1', null, "I am generating this with createElement")
// };
class About extends Component {
    render() {
        return (
            <h1>Hello I am a class component</h1>
    )
    }
}


export default About;