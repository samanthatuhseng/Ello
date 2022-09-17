import * as React from 'react'
import { Button, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


const Login = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text>Ello</Text>
            <Button title="Login with Google" onPress={() => navigation.navigate('Home')}></Button>
            <StatusBar style="auto"/>
        </View>
    );
}

export default Login;