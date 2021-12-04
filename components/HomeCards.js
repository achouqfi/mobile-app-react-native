import React from 'react'
import { StyleSheet, SafeAreaView, Image, ScrollView, TouchableHighlight, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import Global from '../style/Global';
import Produits from '../ressources/Produits'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

export default function HomeCards() {
    return (
    <View style={Global.Categorie}>
        <View style={Global.CategorieTitle}>
            <Text style={Global.CategorieTitle}>Meilleurs Produits</Text>
            <TouchableOpacity>
                <AntDesign name="arrowright" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={Global.homeProduct}>
            {Produits.map((Produit, index) => (
                <View key={index} style={Global.Card}>
                    {/* <View style={Global.Card1} > */}
                        <Image
                            source={Produit.image}
                            style={Global.imageCard}
                        />
                        <Text style={Global.titleCard}>{Produit.titre}</Text>
                        <View style={Global.produitDetails}>
                            <Text style={Global.priceCard}>{Produit.price}</Text>
                            <View style={Global.produitAction}>
                                <TouchableOpacity><Feather style={Global.iconHome} name="heart" size={20} color="black" /></TouchableOpacity>
                                <TouchableOpacity><FontAwesome style={Global.iconHome} name="plus" size={20} color="black" /></TouchableOpacity>
                            </View>
                        {/* </View> */}
                    </View>
                </View>
            ))}
        </View>

      </View>
    )
}