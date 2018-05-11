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
    article:{
        fontSize: 22,
    },
    Menu:{

    },
    smLogo:{
        height:72,
        width:72,
    },
    xlLogo:{
        height:172,
        width:172,
    },
    content:{

    },
    banniere:{

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
    }

})

export default Styles;
