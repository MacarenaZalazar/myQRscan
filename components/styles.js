import { StyleSheet } from "react-native"

export const listStyles = StyleSheet.create({  
    text:{
        marginTop:50,
        marginBottom:15,
        alignSelf:'center',
        fontSize: 45,
    },
    smallText: {
        padding: 10
    },  
    safeArea:{
        flex:0,
        alignContent:'center',
        justifyContent:  'center',
        height: '100%',
        backgroundColor: '#a8b4a5',
    },
    container: {
        flex: 0,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10},
      textContainer: {
        flex: 0,
        justifyContent: 'center',
        alignContent: 'center'
      },
      flat:{
        flex: 0,
        justifyContent: 'center'
      
      },
      input: {
        width: 150,
        margin: 12,
        borderWidth: 1,
        borderColor:'grey',
        padding: 10,
      },
    button:{
        flex:0,
        alignContent:'center',
    },
    formContainer:{
        flex: 0,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    }
}); 

export const displayStyles = StyleSheet.create({  
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    bigContainer: {
        flex: 0,
        width: '80%',
        alignItems:'center',
        justifyContent: 'center',
        flexGrow: 0,
        backgroundColor: 'white',
        borderRadius: 15,  

    },
    container: {
        flex: 0,
        width: '80%',
        alignItems:'center',
        justifyContent: 'center',
        flexGrow: 0,
           
        
      },
      textContainer: {
        flex: 0,
        justifyContent: 'center',
        alignContent: 'center'
      }, 
      item:{
        margin: 1,
        backgroundColor: 'yellow'
      }
}); 

export const readStyles = StyleSheet.create({  
    container: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#737373',
  },
button:{
    alignItems:'center',
    justifyContent: 'center',
}}); 