import {StyleSheet} from "react-native";
import {setHeight, setWidth, setText, setContentHeight} from "../../utils";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: setContentHeight(),
        position: "absolute",
        top:setHeight(84)
    },
    title:{
        fontSize: setText(20),
        letterSpacing: 0,
        lineHeight: setWidth(32),
        fontWeight: "500",
        fontFamily: "Roboto-weight",
        color: "#000",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: setWidth(296),
        height: setWidth(30),
        left: setWidth(32),
        top: setWidth(21)
    },
    welcomeBox:{
        position: "absolute",
        width:setWidth(296),
        left:setWidth(32),
        top:setHeight(72)
    },
    sizeItem:{
        width:setWidth(135),
        height:setWidth(135),
        overflow:"hidden",
        position:"absolute",
    },
    imageItem:{
        width:'100%',
        height:'100%',
        resizeMode:"cover"
    },
    mapStyle:{
        left:0
    },
    accountStyle:{
        left:0,
        top:setWidth(156)
    },
    rideStyle:{
        right:0
    },
    acivityStyle:{
        right:0,
        top:setWidth(156)
    },
    sizeCouponItem:{
        width:setWidth(296),
        height:setWidth(100),
        overflow:"hidden",
        position:"absolute",
        left:0,
        top:setWidth(312)
    }
})
export default styles
