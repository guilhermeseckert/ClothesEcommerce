import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SingInandSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component'
import {auth} from './firebase/firebase.utils'


class  App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }

  }
  unSubscribeFormAuth = null

  componentDidMount() {
    this.unSubscribeFormAuth= auth.onAuthStateChanged( user => {
      this.setState({currentUser: user})

      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unSubscribeFormAuth()
  }




  render () {
  return (
    <div>

    <Header currentUser ={this.state.currentUser}/>
      <Switch>
      <Route exact path= '/' component={HomePage} />
      <Route path= '/shop' component={ShopPage} />
      <Route path= '/signin' component={SingInandSignUpPage} />
      </Switch>
    </div>
  );
  }
}

export default App;
