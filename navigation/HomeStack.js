import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home';
import About from '../screens/About';
import Header from '../components/Header';
import React from 'react'

const screens ={
    Home:{
        screen: Home,
        navigationOptions : ({navigation})=>{
            return {
                headerTitle : ()=><Header navigation={navigation} />
            }
        }
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);