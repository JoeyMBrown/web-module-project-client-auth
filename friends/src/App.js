import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div className="App">

      <Switch>
        <PrivateRoute path='/friends/addfriends' component={AddFriend} />
        <PrivateRoute path="/friends" component={FriendsList} />

        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
