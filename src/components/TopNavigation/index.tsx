import React from 'react';
import {View, Text, Image} from 'react-native'
import styles from "./css.ts";

const images = {
    logo: require('../../assets/header/logo.png'),
    menu: require('../../assets/header/menu.png'),
}

function TopNavigation(): React.JSX.Element {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={images.logo} />
            <Text style={styles.logoText}>RIDER</Text>
            <Image style={styles.menu} source={images.menu} />
        </View>
    )
}

export default TopNavigation;


