import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            number: 2
        }
        sessionStorage.setItem('isAuthenticated', true);
    }
    num = 0;
    updateNumber= (number)=> {
        this.setState({...this.state, number: number})
    }
    render() {
    this.num++;
        console.log('rendered', this.num);
        let {number} = this.state;
        return (
            <>
            <div>Login page</div>
            <h1>{number}</h1>
            <button onClick={()=> this.updateNumber(++number)}>increament</button>
            <button onClick={()=> this.updateNumber(--number)}>decreament</button>
            <button onClick={()=> this.updateNumber(number)}>set same</button>
            <br />
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to About component */}
                    <Link to="/about">About</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/contactus">Contact Us</Link>
                </li>
            </ul>
            </>
        )
    }
    
}
// const Login = new Login();

export default Login;