import {StyleSheet} from "react-native";
import {setHeight, setWidth,setText,setTop} from "../../utils";

const styles = StyleSheet.create({
    logoBox: {
        position: 'absolute',
        top: setTop(400),
        left: setWidth(32)
    },
    logo: {
        resizeMode: 'cover',
        width: setWidth(296),
        height: setWidth(159),
        marginBottom:setWidth(50)
    },
    riderBox:{
        width: setWidth(296),
        alignItems: 'center'
    },
    rider: {
        fontFamily: 'Roboto-weight',
        fontWeight: '700',
        fontSize: setText(20),
        letterSpacing: setWidth(20),
        lineHeight: setHeight(28),
        color: "#fff",
        textAlign: "center",
    },
    btn_face_id: {
        resizeMode: 'contain',
        width: setWidth(296),
        height: setHeight(40),
        position: 'absolute',
        top: setHeight(0),
        left: setWidth(0)
    },
    icon_face_id: {
        resizeMode: 'cover',
        width: setWidth(26),
        height: setWidth(26),
        position: 'absolute',
        top: setWidth(7),
        left: setWidth(106)
    },
    btn_text: {
        fontSize: setText(12),
        lineHeight: setWidth(40),
        fontWeight: '800',
        fontFamily: "Roboto-normal",
        color: "#fff",
        textAlign: "center",
    },
    btn_box: {
        width: setWidth(296),
        height: setWidth(40),
        left: setWidth(32),
    },
    btn_wrapper: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        borderRadius: setWidth(8)
    },
    btn_create_account_box: {
        marginBottom:setWidth(19)
    },
    btn_sign_in_box: {
        marginBottom:setWidth(19)
    },
    btn_face_id_dev:{
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: setWidth(10),
        
    },
    btn_group_box:{
        bottom: setTop(300),
        position:'absolute',
    }
})
export default styles;