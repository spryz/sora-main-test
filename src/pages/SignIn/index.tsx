import React from 'react';
import { View, Image, Text, TextInput, Pressable } from 'react-native'
import styles from "./css.ts";
import images from "./images.ts";
import { useNavigation } from "@react-navigation/native";
import ComTitle from '../../components/ComTitle/index.tsx';
import BottomLogo from '../../components/BottomLogo/index.tsx';
import apiAws from "../../api/api.aws.ts";
function SignIn(): React.JSX.Element {
    const [email, onChangeEmail] = React.useState('');
    const [pwd, onChangePwd] = React.useState('');
    const navigation = useNavigation();

    const runToNext = () => {
        console.log(email,pwd)
        apiAws.signUp({
            username: email,
            password: pwd,
        },()=>{
            // @ts-ignore
            navigation.navigate("Verification");
        })
    }

    return (
        <View style={styles.container}>
            <ComTitle title={'Sign In'} />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder={`Email Address`}
                    onChangeText={text => onChangeEmail(text)}
                    value={email}
                />
                <TextInput
                    style={[styles.input, styles.addressInput]}
                    placeholder={`Current password`}
                    onChangeText={text => onChangePwd(text)}
                    value={pwd}
                />

                <View style={styles.tipTextBox}>
                    <Text style={styles.tipText}>
                        Forgot Password?
                    </Text>
                </View>
                <Pressable style={[styles.btn_box]} onPress={runToNext}>
                    <View style={styles.btn_wrapper}>
                        <Text style={styles.btn_text}>NEXT</Text>
                    </View>
                </Pressable>
                <View style={styles.line_box}>
                    <Image style={styles.line_img} source={images.line} />
                    <Text style={styles.line_text}>or</Text>
                </View>
                <View style={styles.bottom_btn_box}>
                    <View style={styles.bottom_btn_box_item}>
                        <Image style={styles.btn_img} source={images.facebook} />
                    </View>
                    <View style={[styles.bottom_btn_box_item, styles.bottom_btn_box_item_center]}>
                        <Image style={styles.btn_img} source={images.github} />
                    </View>
                    <View style={styles.bottom_btn_box_item}>
                        <Image style={styles.btn_img} source={images.google} />
                    </View>
                </View>
            </View>

            <BottomLogo />


        </View>
    )
}


export default SignIn;


