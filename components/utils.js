import React from "react";
import { View, Text } from "react-native";
import { displayStyles } from "./styles";

export const Separator = () => (
    <View style={displayStyles.separator} />
);
export const RenderItem = ({item}) => {
    return  <Item url={item} />
}
export const Item = ({url}) => <Text style={displayStyles.item} >{url}</Text>

