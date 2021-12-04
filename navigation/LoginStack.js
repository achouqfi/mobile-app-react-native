import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation'
import SigIn from '../screens/Sigin';
import Login from '../screens/Login';
import Header from '../components/Header';
import React from 'react'

const screens ={
    Login:{
        screen: Login,
    },
    SignIn:{screen: SigIn}
}

const LoginStack = createStackNavigator(screens);

export default createAppContainer(LoginStack);