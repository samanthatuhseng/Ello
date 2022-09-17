import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import * as React from 'react'

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     navbar: {
//         width: "100%",
//         // top: "40%",
//         // height: 100
//         justifyContent: 'space-between',
//         flexDirection: 'column',
//     },
//     navbutton: {
//         backgroundColor: 'white',
//     }

// });

const Profile = () => {

    return (
        <View>
            <Text>Profile</Text>

            <View>
                <Button title="Home" onPress={() => navigation.navigate('Home')}></Button>
                <Button title="Request Services"></Button>
                <Button title="Profile" onPress={() => navigation.navigate('Profile')}></Button>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

export default Profile;