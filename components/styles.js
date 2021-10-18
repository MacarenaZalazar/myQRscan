import { StyleSheet } from "react-native"

export const listStyles = StyleSheet.create({  
    text:{
        marginTop:40,
        marginBottom:15,
        alignSelf:'center',
        fontSize: 45,
        // fontFamily:'OCRA-A-Std'
    },
    smallText: {
        padding: 10
    },  
    safeArea:{
        flex:0,
        alignContent:'center',
        height: '100%',
        backgroundColor: '#a8b4a5',
    },
    container: {
        marginTop: 5,
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
    },

}); 

export const displayStyles = StyleSheet.create({  
    separator: {
        
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    bigContainer: {
        flex: 0,
        width: '100%',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 15,  

    },
    container: {
        flex: 0,
        width: '80%',
        alignItems:'center',
        justifyContent: 'center',
        flexGrow: 0,
        marginTop: 10
           
        
      },
      textContainer: {
        flex: 0,
        justifyContent: 'center',
        alignContent: 'center'
      }, 
    item:{
        textDecorationLine: 'underline',
        margin: 1,
        fontSize: 18
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
    },
    loading:{
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#a8b4a5'
    }
});

export const tabStyles = StyleSheet.create({  
    container: {
        flex: 0,
        alignItems:'center',
        flexDirection: 'row',
        justifyContent: 'center',
      },
    input: {
        height: 40,
        width: 80,
        margin: 12,
        borderWidth: 1,
        borderColor:'grey',
        padding: 10,
    },
    button:{
        margin:10,
    },  
    tabBar:{
        display: 'flex', 
        position: 'absolute', 
        bottom: 25,
        height: 60,
        left: 20,
        right: 20, 
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset:{
            width: 10,
            height: 10
        } 
    },
    tab: {
        backgroundColor: '#a8b4a5',
    }}); 