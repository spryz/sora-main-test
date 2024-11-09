import {StyleSheet} from "react-native";
import {setHeight, setWidth,setText} from "../../utils";

const styles = StyleSheet.create({
    header: {
        position: 'relative',
        textAlign: "center"
    },
    arrowLeftBox:{
        top: setHeight(39),
        left: setWidth(32),
        width: setWidth(13),
        height: setHeight(20),
        position: 'absolute'
    },
    arrowLeft: {
        resizeMode: 'cover',
        width:'100%',
        height:'100%'
    },
    title: {
        fontSize: setText(20),
        letterSpacing: 0,
        lineHeight: setHeight(32),
        fontWeight: "500",
        fontFamily: "Roboto-normal",
        color: "#fff",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: setWidth(296),
        height: setHeight(30),
        left: setWidth(32),
        top: setHeight(34),
        position: "absolute",
    },
})

export default styles;
