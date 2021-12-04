import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation'
import SigIn from '../screens/Sigin';
import Contact from '../screens/Contact';
import Header from '../components/Header';
import React from 'react'

const screens ={
    Contact:{
        screen: Contact,
        navigationOptions : ({navigation})=>{
            return {
                headerTitle : ()=><Header navigation={navigation} />
            }
        }
    },
}

const ContactStack = createStackNavigator(screens);

export default createAppContainer(ContactStack);