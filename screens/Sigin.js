import React from 'react'
import { StyleSheet, SafeAreaView, Image, TextInput,ScrollView, TouchableHighlight, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import Global from '../style/Global';
import { FontAwesome5  } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/FontAwesome'

const Sigin = () => {
    return (
        <SafeAreaView style={Global.containerLogin}>
            <View style={Global.headerLogin}>
                <Image source={(require('../assets/image/logo.png'))} style={Global.logo } />
            </View>
            <View>
                {/* <Text style={Global.loginWelcome}>Welcome!</Text> */}
                <TextInput placeholder="NAme" style={Global.loginInput} />
                <TextInput placeholder="Email" style={Global.loginInput} />
                <TextInput placeholder="Password" style={Global.loginInput} />
                <TextInput placeholder="Confirm Password" style={Global.loginInput} />
                <TouchableOpacity style={Global.loginButton}>
                    <Text style={Global.login} >Register</Text>
                </TouchableOpacity>
            </View>
            <Text  style={Global.registerSms}>Forget Password?</Text>
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
            <View style={Global.loginFooter}>
                <View style={Global.loginFooterRight} ></View>
                <View style={Global.loginFooterLeft}></View>
            </View>
        </SafeAreaView> 
    )
}

export default Sigin
