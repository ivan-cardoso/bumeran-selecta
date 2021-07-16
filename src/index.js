import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import store from '../src/store/index'

import { Provider } from 'react-redux'

ReactDOM.render(
  
  <React.Fragment>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
)
