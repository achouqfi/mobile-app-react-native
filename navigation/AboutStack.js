import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation'
import About from '../screens/About';
import Header from '../components/Header';
import React from 'react'

const screens ={
    About:{
        screen: About,
        navigationOptions : ({navigation})=>{
            return {
                headerTitle : ()=><Header navigation={navigation} />
            }
        }
    },

}

const AboutStack = createStackNavigator(screens);

export default createAppContainer(AboutStack);