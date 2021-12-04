import React from 'react'
import { StyleSheet, SafeAreaView, Image, TouchableHighlight, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import Global from '../style/Global';
import { LinearGradient } from 'expo-linear-gradient';

export default function HeaderHome() {
    return (
        <View style={Global.HeaderHome}>
            <LinearGradient
                start={{ x: 1 , y: 1 }}
                colors={['white','white', 'orange']}
                style={Global.background}
            />
            <View style={Global.headerDesc}>
                <Text style={Global.title}> 
                <Text style={Global.prc}>10% </Text>
                    Remise sur tous les produits</Text>
                <TouchableOpacity 
                    style ={Global.ButtonHeader}>
                    <Text style={{ color:'white',textalign: 'center'
                 }}>Consulter</Text>
                </TouchableOpacity> 
            </View>
            <Image source={require('../assets/image/bijous33.png')} style={Global.HeaderImage }  />
        </View>
    )
}