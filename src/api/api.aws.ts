import UserPool from "../config/aws.config.ts";
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute} from "amazon-cognito-identity-js";
import {Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const apiAws = {
    //注册
    signUp:(options:any,callback:any)=>{
        const {username,password}:any = options;
        // 验证非空 TODO
        const attribute = [new CognitoUserAttribute({ Name: 'email', Value: username })];
        console.log('step1',username,password,attribute,UserPool)
        UserPool.signUp(username,password,attribute,[],async (error:any)=>{
            if (error) {
                Alert.alert('Error', error.message || JSON.stringify(error));
            } else {
                Alert.alert('Success', 'Registration successful! Please enter the verification code.');
                await AsyncStorage.setItem('username',username);
                await AsyncStorage.setItem('password',password);
                callback()
            }
        })
    },
    // 验证邮箱
    verification:(options:any,callback:any)=>{
        const {username,verificationCode} = options;
        const user = new CognitoUser({ Username: username, Pool: UserPool });

        user.confirmRegistration(verificationCode,true,(error:any)=>{
            if (error) {
                Alert.alert('Error', error.message || JSON.stringify(error));
            } else {
                // 验证过了  去登录
                callback(); // Call sign-in after successful verification
            }
        })
    },
    // 登录
    signIn:(options:any,callback:any)=>{
        const { username, password } = options;
        const authDetails = new AuthenticationDetails({
            Username: username,
            Password: password,
        });

        const user = new CognitoUser({ Username: username, Pool: UserPool });

        user.authenticateUser(authDetails, {
            onSuccess: async (result) => {
                const idToken = result.getIdToken().getJwtToken();
                await AsyncStorage.setItem('idToken', idToken);
                Alert.alert('Success', 'User signed in!');
                callback()
            },
            onFailure: (error:any) => {
                Alert.alert('Error', error.message || JSON.stringify(error));
            },
        });
    }
}

export default apiAws
