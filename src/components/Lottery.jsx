import React from 'react';
import RandomNum from './Random';
import "./lottery.css"
class LotteryNumber extends React.Component {
    renderNewNumbers() {
        return <RandomNum />;
    }

    render() {
        return (
            <div className="lottery">

                <div className='numbers'>
                    {this.renderNewNumbers()}
                </div>
                <button onClick={() => this.forceUpdate()}>New numbers</button> 
            </div>
        );
    }
}

export default LotteryNumber;
