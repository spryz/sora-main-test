import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native'
import {setWidth, setHeight,setText} from "../../utils";
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
    logoBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ED1C24',
    },
    logo: {
        resizeMode: 'contain',
        width: setWidth(296),
        height: setWidth(159),
        marginBottom:setWidth(50)
    },
    riderBox:{
        width: setWidth(296),
        alignItems: 'center'
        },
    rider: {
        width: setWidth(200),
        fontFamily: 'Roboto-weight',
        fontWeight: '700',
        fontSize: setText(20),
        letterSpacing: setWidth(20),
        lineHeight: setHeight(28),
        color:"#fff",
        textAlign:"center"
    }
})



const images = {
    logo: require('../../assets/logo/logo.png'),
    rider: require('../../assets/rider/rider.png')
}


function Hero(): React.JSX.Element {

    const navigation = useNavigation();
    React.useEffect(() => {
        const timer = setTimeout(() => {
            // 3秒后跳转到目标页面，这里以'Home'为例

            // @ts-ignore
            navigation.navigate("Home");
        }, 3000);

        // 组件卸载时清除定时器
        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.logoBox}>
            <Image style={styles.logo} source={images.logo}></Image>
            <View style={styles.riderBox}>
                <Text style={styles.rider}> RIDER</Text>
            </View>
        </View>
    )
}

export default Hero;


