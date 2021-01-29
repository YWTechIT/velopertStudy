import React, { Component } from 'react';

class Test extends Component{
    state={
        message: ''
    }
    render(){

        return(
            <div>
                <h1> Practice onChange </h1>
                <input
                name='username'
                placeholder='practice'
                value={this.state.message}
                onChange={(e)=>{
                    this.setState({
                        message: e.target.value
                    })
                }}
                ></input>

                <button onClick={()=>{console.log()}}>버튼</button>
            </div>
        )
    }
}

export default Test;