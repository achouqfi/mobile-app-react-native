import React, {useState} from 'react'
import { StyleSheet, SafeAreaView, Image, TextInput,ScrollView, Alert, Modal, Pressable, TouchableHighlight, View, Text, Button, FlatList, TouchableOpacity} from 'react-native'
import Globale from '../style/Global'
import Contacts from '../ressources/Contact'
import { FontAwesome } from '@expo/vector-icons'; 

const Contact = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView >
            <View style={Globale.ContactContainer}>
                <Text style={Globale.loginTitle}>Contact</Text>
                <TextInput placeholder="Name" style={Globale.loginInput} />
                <TextInput placeholder="Email" style={Globale.loginInput} />
                <TextInput placeholder="Sujet" style={Globale.loginInput} />
                <TextInput    
                    placeholder="Message"
                    numberOfLines={30}
                    multiline={true}
                    style={Globale.loginInput} />
                <TouchableOpacity style={Globale.contactButton}>
                    <Text style={Globale.contact} >Send Message</Text>
                </TouchableOpacity>
                <Pressable
                    style={Globale.button}
                    onPress={() => setModalVisible(true)}
                >
                    <Text style={Globale.textStyle}>Contact Onedirect</Text>
                </Pressable>
            </View>
            <View style={Globale.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={Globale.centeredView}>
                        <View style={[Globale.modalView]}>
                            <Text style={Globale.modalText}>Information:</Text>
                                <View style={Globale.cardContact}>
                                    {Contacts.map((Contact, index) => (
                                        <View key={index} style={Globale.cardctct}>
                                            <Image
                                                style={Globale.contactIcon}
                                                source={Contact.icon}
                                            />
                                            <Text>{Contact.description}</Text>
                                        </View>
                                    ))}
                                </View>
                            <Pressable
                            style={[Globale.button, Globale.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={Globale.textStyle}>Back</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    )
}

export default Contact
