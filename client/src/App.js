import './App.css';
import Header from './component/Header.js';
import Home from './component/Home.js';
import Calender from './component/Calender.js';
import Task from './component/Task.js';
import About from './component/About.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { createStore } from 'redux';
import allReducers from './component/reducers';
import { Provider } from 'react-redux';

const store = createStore(
  allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/calender" component={Calender}/>
            <Route path="/task" component={Task}/>
            <Route path="/about" component={About}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
