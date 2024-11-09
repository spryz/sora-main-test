import React,{useState} from 'react';
import {View,Text,Image} from 'react-native'
import styles from "./css.ts";
import images from "./images.ts";
function BottomNavigation(): React.JSX.Element {
    const [currentTab] = useState('home')
    return (
        <View style={styles.container}>
            <View style={styles.icon16pxhomeBreadcrumbsWrapper}>
                <Image style={styles.icon18pxsettings} resizeMode="cover" source={currentTab==='home'?images.homeActive:images.homeDefault} />
            </View>
            <View style={[styles.icon18pxaccountWrapper, styles.profilePosition]}>
                <Image style={styles.icon18pxsettings} resizeMode="cover" source={currentTab==='profile'?images.profileDefault:images.profileDefault} />
            </View>
            <View style={[styles.icon18pxheadphonesWrapper, styles.helpPosition]}>
                <Image style={styles.icon18pxsettings} resizeMode="cover" source={currentTab==='help'?images.helpDefault:images.helpDefault} />
            </View>
            <View style={[styles.icon18pxsettingsWrapper, styles.wrapperSpaceBlock]}>
                <Image style={styles.icon18pxsettings} resizeMode="cover" source={currentTab==='settings'?images.settingsDefault:images.settingsDefault} />
            </View>

            <Text style={[styles.home,currentTab==='home'&&styles.textActive]}>Home</Text>
            <Text style={[styles.profile, styles.helpTypo,currentTab==='profile'&&styles.textActive]}>Profile</Text>
            <Text style={[styles.help, styles.helpPosition,currentTab==='help'&&styles.textActive]}>Help</Text>
            <Text style={[styles.settings, styles.helpTypo,currentTab==='settings'&&styles.textActive]}>Settings</Text>




        </View>
    )
}

export default BottomNavigation;


