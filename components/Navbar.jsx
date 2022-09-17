import * as React from 'react'
import { TouchableOpacity, Image, Text, View } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity style={styles.navbutton} activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
                <Image source={require('../assets/navicons/homeicon.png')} />
                <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navbutton} activeOpacity={0.5}>
                <Image source={require('../assets/navicons/requesticon.png')} />
                <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}>Request Services</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navbutton} activeOpacity={0.5} onPress={() => navigation.navigate('Profile')}>
                <Image source={require('../assets/navicons/usericon.png')} />
                <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};