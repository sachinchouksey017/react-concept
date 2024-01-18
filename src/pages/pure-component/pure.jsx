import React from "react";
import { PureComponent } from 'react';

class Pure extends PureComponent{
    constructor(){
        super();
        this.state={
            number: 2
        }
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
            <div>pure component page</div>
            <h1>{number}</h1>
            <button onClick={()=> this.updateNumber(++number)}>increament</button>
            <button onClick={()=> this.updateNumber(--number)}>decreament</button>
            <button onClick={()=> this.updateNumber(number)}>set same</button>
            </>
        )
    }
    
}

export default Pure;