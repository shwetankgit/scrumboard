import Header from "./components/elements/Header";
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Dashboard from './components/screens/Dasboard'
import Add from './components/screens/Add'
import Update from "./components/screens/Update";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="my-main">
   
      </div>
      <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/add/:addFor' component={Add} />
          <Route path='/update/:updateFor/:id' component={Update} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

  export default App;