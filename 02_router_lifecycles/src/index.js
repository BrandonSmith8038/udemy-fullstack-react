import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom'

import Posts from './components/Posts'
import PostItem from './components/PostItem'
import Home from './components/Home'
import Profiles from './components/Profiles'
import LifeCycles from './components/LifeCycle'
import Conditional from './components/Conditional'


const App = () => {
  return (
   <BrowserRouter>
    <div>
      <header>
        <NavLink to="/">Home</NavLink><br />
        <NavLink 
          to="/posts" 
          activeStyle={{color: 'red'}}
          activeClassName="selected"
        >
          Posts
        </NavLink>
        <br />
        <NavLink to={{
          pathname: '/profiles'
        }}>Profiles</NavLink><br />
        <NavLink to='/life'>LifeCycles</NavLink><br />
        <NavLink to='/conditional'>Conditional</NavLink>
        <hr />
      </header>
      <Switch>
        <Route path="/posts/:id/:username" component={PostItem} />
        <Route path="/posts" component={Posts} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/life" component={LifeCycles} />
        <Route path="/conditional" component={Conditional} />
        <Route path="/" component={Home} exact />
        <Route render={() => <h3>Opps! 404</h3>}/>
      </Switch>
    </div>
   </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))