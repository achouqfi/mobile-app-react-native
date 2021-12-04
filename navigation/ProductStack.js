import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from 'react-navigation'
import Product from '../screens/Product';
import Header from '../components/Header';
import React from 'react'

const screens ={
    Product:{
        screen: Product,
        navigationOptions : ({navigation})=>{
            return {
                headerTitle : ()=><Header navigation={navigation} />
            }
        },
        
    },

}

const ProductStack = createStackNavigator(screens);

export default createAppContainer(ProductStack);