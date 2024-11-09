import React from 'react';
import { View, Image, Text, TextInput, Pressable } from 'react-native'
import styles from "./css.ts";
import images from "./images.ts";
import { useNavigation } from "@react-navigation/native";
import ComTitle from '../../components/ComTitle/index.tsx';
import BottomLogo from '../../components/BottomLogo/index.tsx';
function CreateAccount(): React.JSX.Element {
    const [username, onChangeUserName] = React.useState('');
    const [address, onChangeAddress] = React.useState('');
    const [pwd, onChangePwd] = React.useState('');
    const [rePwd, onChangeRePwd] = React.useState('');
    const navigation = useNavigation();
    const runToWelcome = () => {
        // @ts-ignore

        navigation.navigate("Welcome");
    }
    return (
        <View style={styles.container}>
           <ComTitle title={'Create Account'}
           />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder={`Username*`}
                    onChangeText={text => onChangeUserName(text)}
                    value={username}
                />
                <TextInput
                    style={[styles.input, styles.addressInput]}
                    placeholder={`Email Address*`}
                    onChangeText={text => onChangeAddress(text)}
                    value={address}
                />
                <TextInput
                    style={[styles.input, styles.pwdInput]}
                    placeholder={`Password*`}
                    onChangeText={text => onChangePwd(text)}
                    value={pwd}
                />
                <TextInput
                    style={[styles.input, styles.rePwdInput]}
                    placeholder={`Re-Enter Password*`}
                    onChangeText={text => onChangeRePwd(text)}
                    value={rePwd}
                />
                <View style={styles.tipTextBox}>
                    <Text style={styles.tipText}>
                        Minimum password length is 8 characters. Please use at least 1 uppercase letter, 1 lowercase letter and 1 number.
                    </Text>
                </View>
                <View style={styles.checkboxBox}>
                    <View style={styles.checkboxItem}>
                        <View style={styles.checkboxIcon}>
                            <Image source={images.checkbox} />
                        </View>
                        <Text style={styles.checkboxItemText}>A am at least 18 years old.</Text>
                    </View>
                    <View style={styles.checkboxItem}>
                        <View style={styles.checkboxIcon}>
                            <Image source={images.checkbox} />
                        </View>
                        <Text style={styles.checkboxItemText}>I agree the End User License Agreement</Text>
                    </View>
                </View>
                <Pressable style={[styles.btn_box, styles.btn_sign_up]} onPress={runToWelcome}>
                    <View style={styles.btn_wrapper}>
                        <Text style={styles.btn_text}>SIGN UP</Text>
                    </View>
                </Pressable>
                <Text style={styles.alreadyHaveAnContainer}>
                    <Text style={styles.alreadyHaveAn}>Already have an account? </Text>
                    <Text style={styles.signIn}>Sign In</Text>
                </Text>
            </View>

            <BottomLogo />

            
        </View>
    )
}


export default CreateAccount;


