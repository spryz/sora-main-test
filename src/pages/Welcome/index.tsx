import React from 'react';
import {View, Text, Pressable, Image} from 'react-native'
import TopNavigation from "../../components/TopNavigation";
import BottomNavigation from "../../components/BottomNavigation";
import styles from "./css.ts";
import images from "./images";
import {useNavigation} from "@react-navigation/native";
function Welcome(): React.JSX.Element {
    const navigation = useNavigation();
    const runToAccount = () => {
        // @ts-ignore
        navigation.navigate("Account");
    }
    return (
        <View style={{backgroundColor: '#EEEEEE', flex: 1}}>
            <TopNavigation/>
            <BottomNavigation/>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome Jeff!</Text>
                <View style={styles.welcomeBox}>
                    <Pressable style={[styles.sizeItem,styles.mapStyle]}>
                        <Image style={styles.imageItem} source={images.map} />
                    </Pressable>
                    <Pressable style={[styles.sizeItem,styles.rideStyle]}>
                        <Image style={styles.imageItem} source={images.ride} />
                    </Pressable>

                    <Pressable style={[styles.sizeItem,styles.accountStyle]} onPress={runToAccount}>
                        <Image style={styles.imageItem} source={images.account} />
                    </Pressable>
                    <Pressable style={[styles.sizeItem,styles.acivityStyle]}>
                        <Image style={styles.imageItem} source={images.acivity} />
                    </Pressable>

                    <Pressable style={[styles.sizeCouponItem]}>
                        <Image style={styles.imageItem} source={images.coupons} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Welcome;


