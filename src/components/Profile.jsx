import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from 'react-native';
import * as React from 'react'
import NavBar from 'NavBar'

const Profile = () => {

    return (
        <View>
            <Text>Profile</Text>

            <NavBar />
            <StatusBar style="auto" />
        </View>
    );
}

export default Profile;