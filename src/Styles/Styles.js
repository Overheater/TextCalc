import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    scroll: {
      alignSelf: 'stretch',
      height:500,
      width:400,
    },
    scrollBorder:{
        borderBottomWidth: 2,
        borderBottomColor: "#47315a",
    },
    scrollContent: {
      alignItems:'center',

    },
    CalculateStyling:{
        borderRadius: 3,
        margin: 4,
        height:35,
        width:40,
        
        backgroundColor:"black",
        alignItems:'center',
    },
    equalsign:{
        color:"#dfdfdf",
        fontSize:20,
    },
    calcContainer:{
        flex: 1, 
        height:50, 
        flexDirection:'row',
        alignItems:'center'
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent : 'space-around',
      alignSelf: 'stretch',
      width:200
    },
    textItem: {
      flex:1,
      textAlign: 'left'
    }
  });