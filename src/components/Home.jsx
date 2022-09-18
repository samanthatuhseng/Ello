import * as React from 'react'
import { TouchableOpacity, Image, Text, View, ScrollView } from 'react-native';

const Home = () => {

    return (
        <ScrollView>
            <ScrollView style={styles.container}>
                <Text>Home page</Text>

                <StatusBar style="auto" />
            </ScrollView>

            <Navbar/>
        </ScrollView>

    );

};

export default Home;