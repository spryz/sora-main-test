import {StyleSheet} from "react-native";
import {setTop, setWidth,setText} from "../../utils";

const styles = StyleSheet.create({
    bottomLogo:{
        width:setWidth(88),
        height:setWidth(58),
        resizeMode:"cover",
        marginBottom:setWidth(10)
    },
    bottomTextBox:{
        width:'100%'
    },
    bottomText:{
        fontSize: setText(16),
        letterSpacing: setWidth(20),
        lineHeight: setText(28),
        fontWeight: "700",
        fontFamily: "Roboto-weight",
        color: "#fff",
        textAlign: "center",
    },
    bottomLogoBox:{
        bottom:setTop(100),
        position: "absolute",
        width:'100%',
        alignItems:'center'
    }
})

export default styles;
