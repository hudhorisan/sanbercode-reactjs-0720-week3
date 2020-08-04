import React from 'react'
import Jam from './Jam'

class TimerMundur extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            time:10
        };
    }

    componentDidMount(){
        if(this.props.start !== undefined){
            this.setState({time:this.props.start});
        }
        this.timerID = setInterval(
            ()=>this.detak(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    detak(){
        this.setState({
            time:this.state.time - 1
        });
    }

    render() {
    return(
        <footer>
            {this.state.time >0 &&
            <Jam />
            }
            {this.state.time >0 &&
            <h3>Hitung mundur: {this.state.time}</h3>
            }
        </footer>);
    }
}

export default TimerMundur;