import './App.css';
import BottomNav from './components/Navigation/BottomNav';
import Homepage from './components/Home/Homepage';
import Locations from './components/Locations/Locations';
import Login from './components/Login/Login';
import Membership from './components/Membership/Membership';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/locations" component={Locations} />
            <Route path="/login" component={Login} />
            <Route path="/membership" component={Membership} />
            <Route path="/profile" component={Profile} />
            <Route path="/profile/edit" component={EditProfile}/>
        </Switch>
        <BottomNav />
    </div>
  );
}

export default App;