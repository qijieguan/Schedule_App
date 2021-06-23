import './App.css';
import Header from './component/Header.js';
import Home from './component/Home.js';
import Calender from './component/Calender';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/calender" component={Calender}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;