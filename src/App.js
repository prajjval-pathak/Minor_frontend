import './App.css';
import Form from './components/Form';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormSignup from './components/studentSignup';
import FormLogin from './components/loginStudent';
import Navbar from './components/layout/navBar';
import Landing from './components/layout/Landing';
import Profile from './components/profile/add-education';
import CreateProfile from './components/profile/create-profile';


function App() {
  return (
    <div className="App">
            <Router>
           <Switch>
            <Route path="/signup">
            <Form/>
            </Route>
            <Route path="/login_Student">
            <FormLogin/>
            </Route>
            <Route path="/home">
            <Landing/>
            </Route>
            <Route path="/add-education">
            <Profile/>
            </Route>
            <Route path="/create-profile">
            <CreateProfile/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
