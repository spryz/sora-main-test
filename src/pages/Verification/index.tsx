import React from 'react';
import { View, Image, Text, TextInput, Pressable } from 'react-native'
import styles from "./css.ts";
import images from "./images.ts";
import { useNavigation } from "@react-navigation/native";
import ComTitle from '../../components/ComTitle/index.tsx';
import BottomLogo from '../../components/BottomLogo/index.tsx';
import apiAws from "../../api/api.aws.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
function Verification(): React.JSX.Element {
    const [verificationCode, onChangeCode] = React.useState('');
    const navigation = useNavigation();

    const runToWelcome = async() => {

        apiAws.verification({
            username: await AsyncStorage.getItem('username'),
            verificationCode: verificationCode,
        },async ()=>{
            apiAws.signIn({
                username:await AsyncStorage.getItem('username'),
                password:await AsyncStorage.getItem('password'),
            },()=>{
                // @ts-ignore
                navigation.navigate("Welcome");
            })

        })

    }
    return (
        <View style={styles.container}>
            <ComTitle title={'Verification'} />
            <View style={styles.form}>
                <View style={styles.tipTextBox}>
                    <Text style={styles.tipText}>
                        Enter the verification number that was sent to your account’s email address.
                    </Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder={`Verification Number`}
                    onChangeText={text => onChangeCode(text)}
                    value={verificationCode}
                />

                <Pressable style={[styles.btn_box]} onPress={runToWelcome}>
                    <View style={styles.btn_wrapper}>
                        <Text style={styles.btn_text}>NEXT</Text>
                    </View>
                </Pressable>
            </View>

            <BottomLogo />


        </View>
    )
}


export default Verification;


