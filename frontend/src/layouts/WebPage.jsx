import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Switch } from "react-router-dom"
import { RouteWithSubRoutes } from "../route/RouteConfig"


export default class WebPage extends Component {
    render() {
        return (
            <div>
                <header className="header">  
                    <Header/>                
                </header>
                <main>
                    <Switch>
                    {this.props.routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
                </main>                
                <footer className="footer">
                    <Footer />
                </footer>
            </div>
        )
    }
}