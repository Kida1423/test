import React, { Component } from 'react'
import getNum from './getNum'
class RandomNum extends Component{
    render(){
        return(
            <div className='container'>
                {getNum().map((item) => (
                    <div className='number'>
                        {item}
                    </div>
                ))}
            </div>
        )
    }
}

export default RandomNum