import React from 'react'

class Jam extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      jam: new Date()
    }
  }

  componentDidMount(){
    this.jamID = setInterval(
        () => this.detak()
    , 1000);
  }

  componentWillUnmount(){
    clearInterval(this.jamID);
  }

  detak() {
    this.setState({
        jam: new Date()
    });
  }

  render(){
  return <h3>Sekarang jam: {this.state.jam.toLocaleTimeString()}</h3>;
  }
}

export default Jam