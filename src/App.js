import Header from "./components/elements/Header";
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import ScrumDashboard from './components/screens/ScrumDasboard'
import AddScrum from './components/screens/AddScrum'
import UpdateScrum from "./components/screens/UpdateScrum";


export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="my-main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ScrumDashboard} />
          <Route exact path="/dashboard" component={ScrumDashboard} />
          <Route path='/addscrum' component={AddScrum} />
          <Route path='/updatescrum/:id' component={UpdateScrum} />
          
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  )}