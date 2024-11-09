import { StyleSheet } from "react-native";
import { setHeight, setWidth, setText, setTop } from "../../utils";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ED1C24',
        flex: 1
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
        marginBottom: setWidth(18)
    },
    addressInput: {
        marginBottom: setWidth(8)
    },
    tipTextBox: {
        width: setWidth(296),
        height: setWidth(36),
        marginBottom: setWidth(25),
        position: 'relative',
    },
    tipText: {
        fontSize: setText(14),
        lineHeight: setWidth(18),
        fontFamily: "Roboto-normal",
        color: '#fff',
        textAlign: "left",
    },
    btn_box: {
        width: setWidth(296),
        height: setWidth(40),
        position: 'relative',
        marginBottom: setWidth(38)
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
    line_box: {
        width: setWidth(296),
        height: setWidth(20),
        position: 'relative',
        marginBottom: setWidth('27')
    },
    line_text: {
        textAlign: 'center',
        fontSize: setText(14),
        lineHeight: setWidth(20),
        color: '#fff'
    },
    line_img: {
        width: setWidth(296),
        height: setWidth(1),
        resizeMode: 'cover',
        position: 'absolute',
        top: setWidth(10)
    },
    bottom_btn_box: {
        width: setWidth(212),
        height: setWidth(53),
        marginLeft: setWidth(42),
        flexDirection: 'row'
    },
    bottom_btn_box_item: {
        width: setWidth(64),
        height: '100%',
        backgroundColor: "#fff",
        borderRadius: setWidth(8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom_btn_box_item_center: {
        marginLeft: setWidth(10),
        marginRight: setWidth(10)
    },
    btn_img: {
        width: setWidth(24),
        height: setWidth(24),
        resizeMode: 'cover',
    }
})

export default styles;
