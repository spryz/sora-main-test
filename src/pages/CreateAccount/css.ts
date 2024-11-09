import {StyleSheet} from "react-native";
import {setHeight, setWidth,setText, setTop} from "../../utils";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ED1C24',
        flex: 1,
    },

    form: {
        position: "absolute",
        width: setWidth(296),
        left: setWidth(32),
        top: setHeight(97)
    },
    input: {
        width: "100%",
        height: setWidth(42),
        backgroundColor: "#fff",
        borderRadius: setWidth(8),
        borderStyle: "solid",
        borderColor: "#c7ccd0",
        borderWidth: 1,
        color: '#7b809a',
        fontSize: setText(14),
        paddingLeft: setWidth(16),
        marginBottom:setWidth(18)
    },
    addressInput: {
        // top: setHeight(60)
    },
    pwdInput: {
        // top: setHeight(120)
    },
    rePwdInput: {
        marginBottom:setWidth(10)
    },
    tipTextBox: {
        // position: "absolute",
        width: setWidth(296),
        height: setWidth(42),
        marginBottom:setWidth(19)
        // left: setWidth(32),
        // top: setHeight(330),
    },
    tipText: {

        fontSize: setText(12),
        lineHeight: setWidth(14),
        fontFamily: "Roboto-normal",
        color: '#fff',
        textAlign: "left",
    },
    checkboxBox: {
        // position: "absolute",
        width: setWidth(296),
        marginBottom:setWidth(18),
        // left: setWidth(32),
        // top: setHeight(388),
    },
    checkboxItem: {
        width: '100%',
        height: setHeight(24),
        position: 'relative'
    },
    checkboxIcon: {
        width: setWidth(17),
        height:setWidth(18),
        position: 'absolute',
        top:setHeight(3)
    },
    checkboxItemText: {
        position: "absolute",
        top: 0,
        height:'100%',
        lineHeight:setWidth(18),
        left: setWidth(26),
        color: '#fff',
        fontSize: setText(14),
        fontFamily: "Roboto-normal",
    },
    btn_box: {
        width: setWidth(296),
        height: setWidth(40),
        position:'relative',
        marginBottom:setWidth(13)
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
    },
    alreadyHaveAn: {
        fontFamily: "Roboto-normal"
    },
    signIn: {
        fontWeight: "700",
        fontFamily: "Roboto-weight"
    },
    alreadyHaveAnContainer: {
        fontSize: setText(14),
        lineHeight: setHeight(20),
        color: "#fff",
        textAlign: "center",
    }
})
export default styles;