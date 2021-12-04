import React, {useState} from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button, FlatList, ScrollView, TouchableOpacity} from 'react-native'
import Header from '../components/HeaderHome';
import Categorie from '../components/Categorie';
import CardHome from '../components/HomeCards'

export default function Home() {

    return (
        <SafeAreaView style={{ backgroundColor:'white' }}>
            <ScrollView>
                <Header />
                <Categorie />
                <CardHome />
            </ScrollView>
        </SafeAreaView>
    )
}