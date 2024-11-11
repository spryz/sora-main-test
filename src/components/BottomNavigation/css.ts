import {StyleSheet} from "react-native";
import {setHeight, setWidth,setText} from "../../utils";

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#d2d2d2",
        flex: 1,
        width: "100%",
        height: setWidth(98),
        overflow: "hidden",
        position: 'absolute',
        bottom:0
    },
    wrapperSpaceBlock: {
        padding: setWidth(12),
        flexDirection: "row",
        height: setWidth(56),
        top: setWidth(3)
    },
    helpTypo: {
        color: "#000",
        height: setWidth(13),
        width: setWidth(56),
        display: "flex",
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        lineHeight: setWidth(14),
        letterSpacing: 0,
        fontSize: setText(10),
        top: setWidth(50),
        justifyContent: "center"
    },
    helpPosition: {
        marginLeft: setWidth(12),
        alignItems: "center",
        left: "50%",
        position: "absolute"
    },
    profilePosition: {
        marginLeft: setWidth(-68),
        alignItems: "center",
        left: "50%",
        position: "absolute"
    },
    icon18pxsettings: {
        width: setWidth(32),
        height: setWidth(32),
        overflow: "hidden"
    },
    icon18pxsettingsWrapper: {
        alignItems: "center",
        left: "50%",
        marginLeft: setWidth(92),
        position: "absolute"
    },
    icon16pxhomeBreadcrumbsWrapper: {
        justifyContent: "center",
        marginLeft: setWidth(-148),
        padding: setWidth(12),
        alignItems: "center",
        flexDirection: "row",
        height: setWidth(56),
        left: "50%",
        top: setWidth(3),
        position: "absolute"
    },
    home: {
        color: "#000",
        height: setWidth(13),
        width: setWidth(56),
        display: "flex",
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        lineHeight: setWidth(14),
        letterSpacing: 0,
        fontSize: setText(10),
        top: setWidth(50),
        justifyContent: "center",
        marginLeft: setWidth(-148),
        alignItems: "center",
        left: "50%",
        position: "absolute"
    },
    profile: {
        marginLeft: setWidth(-68),
        alignItems: "center",
        fontFamily: "Roboto-Bold",
        left: "50%",
        position: "absolute"
    },
    help: {
        color: "#000",
        height: setWidth(13),
        width: setWidth(56),
        display: "flex",
        textAlign: "center",
        fontFamily: "Roboto-Medium",
        lineHeight: setWidth((14)),
        letterSpacing: 0,
        fontSize: setText(10),
        top: setWidth(50),
        justifyContent: "center"
    },
    settings: {
        alignItems: "center",
        left: "50%",
        fontFamily: "Roboto-Bold",
        marginLeft: setWidth(92),
        position: "absolute"
    },
    icon18pxaccountWrapper: {
        padding: setWidth(12),
        flexDirection: "row",
        height: setWidth(56),
        top: setWidth(3)
    },
    icon18pxheadphonesWrapper: {
        padding: setWidth(12),
        flexDirection: "row",
        height: setWidth(56),
        top: setWidth(3)
    },
    textActive:{
        color:"#a9a9a9"
    }
})

export default styles;
