import {StyleSheet} from 'react-native';
import Colors from './Colors';


//this object export default style of all component's app
const Styles = StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:Colors.grey,

    },
    title:{
        fontSize:26,
        marginVertical:15,
        fontWeight: 'bold',
    },
    greyBack:{
        backgroundColor:Colors.grey,
    },
    input:{
        borderColor: 'gray',
        borderWidth: 1,
        textAlign:'center'
    },
    row:{
        flexDirection:'row'
    },
    textButton:{
        marginVertical : 10,
        marginHorizontal: 10,
        width : 125,
        height:45,
        backgroundColor:Colors.green,
        color:Colors.grey,
        justifyContent:'center',
        alignItems :'center',
        textAlign : 'center',
        fontSize : 18,
        paddingTop:8,
        borderRadius:25,
    },
    card:{
        flex:1,
        marginVertical:25,
        marginHorizontal:30,
        justifyContent:'center'
    },
    cardHeader:{

    },
    cardBody:{

    },
    cardFooter:{

    },
    cardTitle:{
        textAlign:'center',
        fontSize:24,
        fontWeight:'bold',
        color:Colors.green
    },
    cardCreated:{
        color:Colors.blue,
        fontSize:14,
    },
    cardInput:{
        marginTop:20,
        textAlign:'center',
        paddingBottom:10,
        backgroundColor:Colors.white
    },
    cardText:{
        textAlign:'justify',
        fontSize:18,
    },
    cardImage:{
        width: 400,
        height: 180,
        marginVertical:10
    },

})

export default Styles;
