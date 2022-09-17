import * as React from 'react'
import { TouchableOpacity, Image, Text, View, ScrollView } from 'react-native';

const Home = () => {

    return (
        <ScrollView>
            <ScrollView style={styles.container}>
                <Text>Home page</Text>

                <StatusBar style="auto" />
            </ScrollView>


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
        </ScrollView>

    );

};

export default Home;