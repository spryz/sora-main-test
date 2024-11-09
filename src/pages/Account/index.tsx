import React from 'react';
import {View, Text, Pressable, Image, TextInput} from 'react-native'
import TopNavigation from "../../components/TopNavigation";
import BottomNavigation from "../../components/BottomNavigation";
import {useNavigation} from "@react-navigation/native";

import styles from "./css.ts";
import images from "./images";
function Account(): React.JSX.Element {
    const navigation = useNavigation()
    return (
        <View style={{backgroundColor: '#EEEEEE', flex: 1}}>
            <TopNavigation/>
            <BottomNavigation/>
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.titleStyle}>Account</Text>
                    <Pressable style={styles.titleClose} onPress={()=>navigation.goBack()}>
                        <Image style={styles.imageStyle} source={images.close}/>
                    </Pressable>
                </View>
                <View style={styles.formBox}>
                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Username</Text>
                        <TextInput style={styles.formInput} />
                        <View style={styles.formItemClose}>
                            <Image style={styles.imageStyle} source={images.close} />
                        </View>
                    </View>
                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Email</Text>
                        <TextInput style={styles.formInput} />
                        <View style={styles.formItemClose}>
                            <Image style={styles.imageStyle} source={images.close} />
                        </View>
                    </View>
                    <View style={styles.formItem}>
                        <Text style={styles.formLabel}>Password</Text>
                        <TextInput style={styles.formInput} />
                        <View style={styles.formItemClose}>
                            <Image style={styles.imageStyle} source={images.close} />
                        </View>
                        <View style={styles.eyesStyle}>
                            <Image style={styles.imageStyle} source={images.eyes} />
                        </View>
                    </View>
                    <Pressable style={[styles.btn_box,styles.btn_sign_up]}>
                        <View style={styles.btn_wrapper}>
                            <Text style={styles.btn_text}>UPDATE</Text>
                        </View>
                    </Pressable>
                </View>

            </View>
        </View>
    )
}

export default Account;


