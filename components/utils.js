import React from "react";
import { View, Text, Linking, Alert } from "react-native";
import { displayStyles } from "./styles";

export const Separator = () => (
    <View style={displayStyles.separator} />
);
export const RenderItem = ({item}) => {
    return  <Item url={item} />
}
export const Item = ({url}) => {
        const openLink = () =>{
            Alert.alert(
                `Would you like to open ${url}?`,'',
                [
                  {
                    text: "Cancel",
                    style: "cancel"
                  },
                  { text: "OK", onPress: async () => Linking.openURL(url) }
                ]
              );     
    }
    return <Text style={displayStyles.item} onPress={()=> openLink()}>{url}</Text>
}

