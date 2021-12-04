import React from 'react'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from '../navigation/HomeStack';
import About from '../navigation/AboutStack';
import Product from './ProductStack'
import Login from './LoginStack'
import Contact from './ContactStack'

const RootDrawerNavigation = createDrawerNavigator({
    Home: {
        screen: Home,
    },
    About: {
        screen : About
    },
    Product: {
        screen : Product
    },
    Login: {
        screen : Login
    },
    Contact: {
        screen : Contact
    },
})

export default createAppContainer(RootDrawerNavigation);