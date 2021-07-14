import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import "./App.css"
import axios from "axios"
import store from './store'
import Recruiter from "./components/RecruiterForm/Recruiter";


function App() {

  return (
      
    <div>
      
      <BrowserRouter>
      <Provider store={store}>
      <Switch>

      <Route exact path="/recruiters" component={Recruiter} />

      </Switch>
      </Provider>
      </BrowserRouter>
   
      </div>

/* TypeError: Cannot read property 'getState' of undefined
(anonymous function)
node_modules/react-redux/es/components/Provider.js:20 */
    
  )
}

export default App;
