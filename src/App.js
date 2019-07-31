import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    //similar to saying const setCurrentUser= this.props.setCurrentUser. destructuring is used here.
    //the function is stored in a constant and used below.
    //const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged ( async userAuth=> {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });

        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
             render= {() =>
               this.props.currentUser ? (
                 <Redirect to="/" />
               ) : (
                 <SignInAndSignUpPage />
               )
             }
          />
        </Switch>
      </div>
    );
  }

}
const mapStatetoProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user=> dispatch(setCurrentUser(user))
})

/* equivalent code: it just wraps the action with dispatch function and stores in a varable
called setCurrentUser. Connect enables this to be used within the component.
So whenever, this variable is called, it actually dispatches the action to store.
function mapStatetoProps(dispatch){
  function anony(user){
    setCurrentUser : dispatch(setCurrentUser(user));
  }
}
you can even do this if it is confusing:
function mapStatetoProps(dispatch){
  function anony(input){
    handleforAction : dispatch(setCurrentUser(input));
  }
}

*/
export default connect(mapStatetoProps,mapDispatchToProps)(App);
