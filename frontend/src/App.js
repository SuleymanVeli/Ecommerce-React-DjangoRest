import React, { Component } from 'react'
import { Switch, BrowserRouter } from "react-router-dom"
import { routes, RouteWithSubRoutes } from "./route/RouteConfig"
import './styles/index.sass'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    )
  }
}

