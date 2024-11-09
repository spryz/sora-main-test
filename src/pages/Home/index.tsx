import React from 'react';
import { Image, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from "./css.ts";
import images from "./images.ts";


function Home(): React.JSX.Element {
    const navigation = useNavigation();

    const runToCreateAccount = () => {
        navigation.navigate('CreateAccount');
    }
    const runToSignIn = () => {
        navigation.navigate('SignIn');
    }
    return (
        <View style={{ backgroundColor: '#ED1C24', flex: 1 }}>
            <View style={styles.logoBox}>
                <Image style={styles.logo} source={images.logo}></Image>
                <View style={styles.riderBox}>
                    <Text style={styles.rider}> RIDER</Text>
                </View>
            </View>
            <View style={ styles.btn_group_box}>
                <Pressable style={[styles.btn_create_account_box, styles.btn_box]} onPress={runToCreateAccount}>
                    <View style={styles.btn_wrapper}>
                        <Text style={styles.btn_text}>CREATE ACCOUNT</Text>
                    </View>
                </Pressable>
                <Pressable style={[styles.btn_sign_in_box, styles.btn_box]} onPress={runToSignIn}>
                    <View style={styles.btn_wrapper}>
                        <Text style={styles.btn_text}>SIGN IN</Text>
                    </View>
                </Pressable>
                <Pressable style={ styles.btn_box}>
                    <View style={styles.btn_wrapper}>
                        <View style={styles.btn_face_id_dev}>
                            <Text style={styles.btn_text}>FACE ID</Text>
                        </View>
                        <Image style={styles.icon_face_id} source={images.icon_face_id}></Image>
                    </View>
                </Pressable>
            </View>

        </View>
    )
}

export default Home;


