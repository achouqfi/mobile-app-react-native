import { StyleSheet} from 'react-native'

const Globale = StyleSheet.create({

    HeaderHome:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'center',
        height: 140
    },
    ButtonHeader:{
        height: 35,
        width:130,
        borderRadius:28,
        backgroundColor : "#393939",
        marginLeft :35,
        marginTop :10,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '900'
    },
    HeaderImage: {
      width: 170,
      height: 100,
      marginTop: 20
    },
    headerDesc:{
        width:200,
        marginLeft: 10
    },
    prc:{
        fontSize: 35,
        fontWeight: 'bold'
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 140,
    },


    // categories
    Categorie:{
        marginTop: 15,
        paddingVertical: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    CategorieTitle:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 16,
        fontWeight: 'bold',
        // marginBottom: 
    },
    items:{
        alignItems: "center",
        marginRight: 20,
        padding: 1,
        height: '100%',
        borderRadius: 10
    },
    imageItem:{
        width: 80,
        height: 80,
        resizeMode: "contain",
        zIndex: 999,
    },
    itemTitle:{
        fontSize: 13,
        fontWeight: "700" ,
        paddingBottom: 10,
        width: 100,
        textAlign: 'center',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#E6B31E',
        marginTop: -45,
        paddingTop: 40,
    },

    // product cards
    homeProduct:{
        flexDirection: "row",
        flexWrap: "wrap",
    },
    Card:{
        backgroundColor: '#E5E5E5',
        marginLeft: 12,
        marginBottom: 12,
        height: 230,
        width: 160,
    },
    imageCard:{
        height: 170,
        width: 160,
    },
    titleCard:{
        padding: 5,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    produitDetails:{
        marginLeft: 10,
        flexDirection: 'row',
        padding: 5,
    },
    produitAction:{
        flexDirection: "row",
        justifyContent: "flex-end",
        marginLeft: 38,  
        marginTop: -5
    },
    priceCard:{
        fontWeight: 'bold',
        fontSize: 12
    },
    iconHome:{
        fontWeight: '900',
        marginLeft: 6
    },

    // login page
    containerLogin:{
        backgroundColor:'white',
        height: '100%'
    },
    headerLogin:{
        height: 160,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        marginBottom: 10
    },
    loginTitle:{
        textAlign: 'center',
        fontSize: 35,
        marginTop: 10,
        fontWeight:'bold',
        marginBottom: 40,
        color:'white'
    },
    logo:{
        height:150,
        width: 150,
        marginLeft: '30%',
        marginVertical: 2,
        
    },
    loginInput:{
        height: 45,
        borderWidth: 1,
        borderColor: '#EDEFF3',
        marginLeft: 20,
        marginRight: 20,
        marginBottom:19,
        backgroundColor: '#EDEFF3',
        borderRadius: 10,
        padding: 12,
    },
    loginWelcome:{
        margin: 11,
        marginLeft: '5%',
        fontSize: 17,
        fontWeight: 'bold',
    },
    loginButton:{
        backgroundColor:'orange',
        height: 45,
        margin: 20,
        borderRadius: 10,
        padding: 12,
    },
    login:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },
    forgetPassword:{
        color: '#E6B31E',
        textAlign: 'right',
        marginRight: 23,
        fontWeight: '600',
        fontSize: 15,
    },
    facebookGoogleIcon:{
        height: 30,
        width: 30,
    },
    register:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,

    },
    registerSM:{
        flexDirection: 'row',
        width: 100,
        justifyContent: 'space-evenly',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        width: 150,
        height: 50,
        alignItems: 'center',
        borderRadius: 10,
    },
    facebookName:{
        color: 'blue',
        fontWeight: '600'
    },
    googleName:{
        color: '#ff5c2c',
        fontWeight: '600'
    },
    loginFooter:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 70
    },
    loginFooterRight:{
        backgroundColor: 'orange',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        marginLeft: -35,
        marginTop: 60
    },
    loginFooterLeft:{
        backgroundColor: 'orange',
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        marginRight: -85,
        marginBottom: -85
    },
    SignIn:{
        textAlign: 'center',
        color: '#E6B31E',
        marginRight: 23,
        fontWeight: '600',
        fontSize: 15,
    },
    DSignIn:{
        textAlign: 'center',
        marginTop: 25
    },
    registerSms:{
        color: '#E6B31E',
        textAlign: 'center',
        // marginRight: 23,
        marginTop: 20,
        fontWeight: '600',
        fontSize: 15,
    },

    // contact page
    ContactContainer:{
        backgroundColor: "#E6B31Ecc",
        height: "80%",
        width : "90%",
        justifyContent: 'center',
        margin: "5%",
        marginTop: 50,
        borderRadius: 20
    },
    contactButton:{
        backgroundColor:'white',
        height: 45,
        margin: 20,
        borderRadius: 10,
        padding: 12,
        marginBottom: 0
        
    },
    contact:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#E6B31E'
    },

    //card contact
    cardContact:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    cardctct:{
        height: 105,
        backgroundColor:"#E6B31Ecc",
        width: 140,
        borderRadius: 10,
        alignItems: 'center',
        textAlign: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 42,
        width: '100%'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
    },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 9,
        width: 360,
        height: 240
    },
    button: {
        height: 35,
        width:230,
        borderRadius:20,
        marginLeft :55,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    buttonClose: {
        backgroundColor: "#E6B31E",
        height: 40,
        width:100,
        marginLeft: 92
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontWeight:'bold',
        fontSize: 17
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 21
    },
    contactIcon:{
        width: 40,
        height: 40,
        margin: 15
    }
});

export default Globale;