import {StyleSheet, Dimensions } from 'react-native';
import Colors from './Colors';

let{height , width} = Dimensions.get('screen');

//Some styles
const Styles = StyleSheet.create({
    maxScreen:{
      height:this.height,
      width:this.width,       
    },
    container: {
      width:this.width, 
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

})

export default Styles;
