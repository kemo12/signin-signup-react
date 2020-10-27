import { React, Component } from 'react';
import './App.css';
import SignUp from './pages/SignUp/SignUp';

class App extends Component {
  state = {
    massage:'',
    users: [
      {  email: 'kamel@gmail.com', password: '123' },
      {  email: 'kamel@gmail.com', password: '123' },
    ],
  };
  onSubmit = (e, mail, password, repassword, checkbox) => {
    e.preventDefault();
    if (mail === '' || password === '' || repassword === '') {
      this.setState((prevState)=>{
        return{massage:'all feild requier'}
      });
      return;
    } else {
      const email = this.state.users.map((info, index) => {
        if (info.email === mail) {
          this.setState((prevState)=>{
            return{massage:'this user is used'}
          });
          return;
        }
      });
      if (checkbox == false) {
        this.setState((prevState)=>{
          return{massage:'you should agree to terms & cnditions'}
        });
        return;
      }
      if (password != repassword) {
        this.setState((prevState)=>{
          return{massage:'the two password is not equal'}
        });
        return;
      }
      const newuser={
        email:mail,
        password:password
      }
      const newusers=this.state.users;
      newusers.push(newuser)
      this.setState((prevState)=>{
        return{users:newusers,massage:'register is done'}
      }
    );
    console.log(this.state.users);


    }
  };

  render() {
    return (
      <div className='App'>
        <SignUp onSubmit={this.onSubmit} massage={this.state.massage} />
      </div>
    );
  }
}

export default App;
