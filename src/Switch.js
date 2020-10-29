import { React, Component } from 'react';
import './App.css';
import SignUp from './pages/SignUp/SignUp';
import Signin from './pages/SignIn/Signin'

class Switch extends Component {
  state = {
    visible1:false,
    visible2:true
}
switch1=()=>{
    this.setState((prevState)=>{
        return{visible1:true,visible2:false}
      });
}
switch2=()=>{
    this.setState((prevState)=>{
        return{visible1:false,visible2:true}
      });
}

  render() {
    return (
      <div className='Switch'>
        {this.state.visible1?<SignUp onSubmit={this.props.onSubmit} massage={this.props.massage} visible1={this.state.visible1} visible2={this.state.visible2} switch2={this.switch2}/>:null}
      
        {this.state.visible2?<Signin signin={this.props.signin} massage={this.props.massage} visible1={this.state.visible1} visible2={this.state.visible2} switch1={this.switch1}/>:null}
      </div>
    );
  }
}

export default Switch;
