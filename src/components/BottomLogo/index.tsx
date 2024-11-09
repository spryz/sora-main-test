import React from 'react';
import { View, Text, Image, Pressable } from 'react-native'
import styles from "./css";
const images = {
    logo: require('../../assets/create_account/logo.png'),
}
function BottomLogo(): React.JSX.Element {
    return (
        <View style={styles.bottomLogoBox}>
            <Image style={styles.bottomLogo} source={images.logo} />
            <View style={styles.bottomTextBox}>
                <Text style={styles.bottomText}> RIDER</Text>
            </View>
        </View>
    )
}

export default BottomLogo;


