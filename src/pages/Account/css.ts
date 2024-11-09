import {StyleSheet} from "react-native";
import {setHeight, setWidth, setText, setContentHeight} from "../../utils";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: setContentHeight(),
        position: "absolute",
        top: setWidth(84)
    },
    titleBox: {
        width: setWidth(296),
        height: setWidth(57),
        left: setWidth(32),
        position: 'absolute',
    },
    titleStyle: {
        fontSize: setText(20),
        letterSpacing: 0,
        lineHeight: setWidth(57),
        fontWeight: "500",
        fontFamily: "Roboto-weight",
        color: "#000",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: setWidth(296),
        height: setWidth(57)
    },
    titleClose: {
        width: setWidth(24),
        height: setWidth(24),
        position: 'absolute',
        overflow: "hidden",
        top: setWidth(16.5)
    },
    imageStyle: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },
    formBox: {
        width: setWidth(296),
        position: 'absolute',
        left: setWidth(32),
        top: setWidth(73)
    },
    formItem: {
        width: '100%',
        height: setWidth(40),
        borderRadius: setWidth(8),
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "#a9a9a9",
        borderWidth: setWidth(1),
        position: "relative",
        paddingLeft: setWidth(13),
        marginBottom: setWidth(16),
    },
    formLabel: {
        fontSize: setText(10),
        height: setWidth(14),
        lineHeight: setWidth(14),
        fontFamily: "Roboto-normal",
        color: "#7b809a",
        textAlign: "left"
    },
    formInput: {
        width: setWidth(200),
        height: setWidth(35),
        fontSize: setText(16),
        lineHeight: setWidth(35),
        fontFamily: "Roboto-normal",
        color: "#000",
        textAlign: "left",
        position: 'absolute',
        top: setWidth(10),
        left: setWidth(10)
    },
    formItemClose:{
        width:setWidth(18),
        height: setWidth(18),
        position: 'absolute',
        top: setWidth(10),
        right:setWidth(10),
    },
    eyesStyle:{
        width:setWidth(18),
        height: setWidth(13),
        position: 'absolute',
        top: setWidth(14),
        right:setWidth(30),
    },
    btn_box: {
        width: '100%',
        height: setWidth(40),
        position: 'absolute',
    },
    btn_wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        borderRadius: setWidth(8)
    },
    btn_text: {
        fontSize: setText(12),
        lineHeight: setWidth(40),
        fontWeight: '800',
        fontFamily: "Roboto-normal",
        color: "#fff",
        textAlign: "center",
    },
    btn_sign_up:{
        top:setWidth(206)
    },
})

export default styles;
