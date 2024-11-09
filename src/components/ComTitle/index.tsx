import React from 'react';
import {View,Text,Image,Pressable} from 'react-native'
import styles from "./css";
import images from "./images";
import { useNavigation } from "@react-navigation/native";

function ComTitle(props:any): React.JSX.Element {
    const navigation = useNavigation();
    return (
        <View style={styles.header}>
                <Text style={styles.title}>{props.title}</Text>
                <Pressable style={styles.arrowLeftBox} onPress={() => navigation.goBack()}>
                    <Image style={styles.arrowLeft} source={images.arrowLeft} ></Image>
                </Pressable>
            </View>
    )
}

export default ComTitle;


