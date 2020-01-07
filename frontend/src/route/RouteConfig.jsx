import React from "react";
import { Route } from "react-router-dom";
import WebPage from "../layouts/WebPage"
import Home from "../containers/Home"
import Product from "../containers/Product"
import Auth from "../containers/Auth"
import Checkout from "../containers/Checkout"
import Profile from "../containers/Profile"
import OrderList from '../components/OrderList'


export const routes = [       
    {        
        path: "/",
        component: WebPage,
        routes: [ 
            {
                path: "/login",
                component: Auth,
                routes:{comp:"login"}
            },           
            {
                path: "/register",
                component: Auth,
                routes:[{comp:"register"}]
            },           
            {
                path: "/profile",
                component: Profile,
                routes: [ 
                    {
                        path: "/profile/order",
                        component: OrderList 
                    }
                ]
            },           
            {
                path: "/products/:category",
                component: Product
            },
            {
                path: "/cart",
                component: Checkout
            },
            {
                path: "/",
                component: Home
            }
        ]
    }    
    
];

export function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}

