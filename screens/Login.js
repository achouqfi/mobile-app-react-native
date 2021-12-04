import React from 'react'
import { StyleSheet, SafeAreaView, Image, TextInput,ScrollView, TouchableHighlight, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import Global from '../style/Global';
import { FontAwesome5  } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}) {
    const pressHandler= () =>{
        navigation.push('SignIn');
    }
    return (
        
        <SafeAreaView style={Global.containerLogin}>
            <View style={Global.headerLogin}>
                <Image source={(require('../assets/image/logo.png'))} style={Global.logo } />
                {/* <Text style={Global.loginTitle}>Login</Text> */}
            </View>
            <View>
                <Text style={Global.loginWelcome}>Welcome!</Text>
                <TextInput placeholder="Email" style={Global.loginInput} />
                <TextInput placeholder="Password" style={Global.loginInput} />
                <TouchableOpacity style={Global.loginButton}>
                    <Text style={Global.login} >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text  style={Global.forgetPassword}>Forget Password?</Text>
                </TouchableOpacity>
            </View>
            <View style={Global.register} >
                <TouchableOpacity style={Global.registerSM}>
                    <Image source={require('../assets/image/search.png')} style={Global.facebookGoogleIcon} />
                    <Text style={Global.googleName}>Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Global.registerSM}>
                    <FontAwesome5 name="facebook" size={33} color="blue"  />
                    <Text style={Global.facebookName}>Facebook</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={pressHandler}>
                    <Text style={Global.DSignIn} >Don't have an account?<Text style={Global.SignIn}> Sign In</Text></Text>
            </TouchableOpacity>
            <View style={Global.loginFooter}>
                <View style={Global.loginFooterRight} ></View>
                <View style={Global.loginFooterLeft}></View>
            </View>

        </SafeAreaView> 
    )
}