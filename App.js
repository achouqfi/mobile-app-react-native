import  React, {useState} from "react";
import { SafeAreaView, View, Text } from "react-native";
import Navigator from './navigation/Drawer';



export default function App() {
      return(
          <Navigator style={{ 
              backgroundColor:"white"
           }} />
      )
}