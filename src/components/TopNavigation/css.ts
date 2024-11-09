import {StyleSheet} from "react-native";
import {setHeight, setWidth,setText} from "../../utils";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:setWidth(84),
        backgroundColor:'#ED1C24',
        position: 'relative',
    },
    logo:{
        width:setWidth(56),
        height:setWidth(37),
        resizeMode:"cover",
        position: 'absolute',
        left:setWidth(32),
        top:setWidth(35),
    },
    logoText:{
        position: 'absolute',
        left:setWidth(105),
        top:setWidth(43),
        fontSize: setText(15),
        letterSpacing: setWidth(7.5),
        lineHeight: setWidth(21),
        fontWeight: "700",
        fontFamily: "Roboto-weight",
        color: "#fff",
        textAlign: "left"
    },
    menu:{
        width:setWidth(24),
        height:setWidth(24),
        resizeMode:"cover",
        position: 'absolute',
        right:setWidth(20),
        top:setWidth(40),
    }
})

export default styles;
