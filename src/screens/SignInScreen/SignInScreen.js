import React , {useState} from 'react';
import { View,Text,Image,StyleSheet,useWindowDimensions,ScrollView } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';  
 
const SignInScreen = ()=> {
    const navigation = useNavigation();   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


     const {height} = useWindowDimensions();     

   
    const onSignInPressed = () => {    
    console.warn('Sign in');

    navigation.navigate('HomeScreen'); 
    };
    
    const onForgotPasswordPressed = () => {    
        console.warn('onForgotPasswordPressed');
        };

    const onSignInFacebook = () =>{
        console.warn('onSignInFacebook');
    };
    const onSignInGoogle = () =>{
        console.warn('onSignInGoogle');
    };
    const onSignInApple = () =>{
        console.warn('onSignInApple');
    };
        
    return(
        <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.root}>
            <Text style = {styles.text}>Welcome to Your Pet Store</Text>
         <Image 
            source = {Logo} 
            styles = {[styles.logo,{height:height * 0.01}]}
            style = {{width:400,height:400}}
            resizeMode = "contain"
            /> 

        <CustomInput 
        placeholder = "Username" 
        value = {username} 
        setValue = {setUsername}
        />

        <CustomInput 
        placeholder="Password" 
        value = {password} 
        setValue = {setPassword}
        secureTextEntry 
        />

        <CustomButton text = "Sign In" onPress = {onSignInPressed}/>   
         
        <CustomButton 
        text = "Forgot Password ?" 
        onPress = {onForgotPasswordPressed} 
        type = "TERTIARY"
         /> 

        <CustomButton 
        text = "Sign In with Facebook" 
        onPress = {onSignInFacebook}
        bgColor = "#E7EAF4"
        fgColor = "#4765A9"
        />
        <CustomButton 
        text = "Sign In with Google " 
        onPress = {onSignInGoogle}
        bgColor = "#FAE9EA"
        fgColor = "#DD4D44"
        />
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    root:{
        alignItems : 'center',
        padding : 1,
    },
    logo : {
        width : '10%',
        maxWidth : 100, 
        maxHeight : 200,
    },
    text : {
        justifyContent:'center',
        alignItems:'center',
        fontWeight:'600',
        fontSize:16,
        marginLeft:13,
        top:50,
    },
});  

export default SignInScreen; 