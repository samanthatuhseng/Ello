import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, Alert, StyleSheet, Button, Text, View, ScrollView } from 'react-native';
// import { render } from 'ejs';


const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navbar: {
    width: "100%",
    // top: "40%",
    // height: 100
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  navbutton: {
    backgroundColor: 'white',
  }

});
// Components
// const NavigationBar = ({ navigation }) => {
//   return (
//     <View>
//       <Button title="Home" onPress={() => navigation.navigate('Home')}></Button>
//       <Button title="Request Services"></Button>
//       <Button title="Profile" onPress={() => navigation.navigate('Profile')}></Button>
//     </View>
//   )
// }

// Pages

const Login = ({ navigation }) => {
  {/*Button not linked yet, just takes u to home page to prove it works!*/}
  return (
    <View style={styles.container}>
      <Text>Ello</Text>
      <Button title="Login with Google" onPress={() => navigation.navigate('Home')}></Button>
      <StatusBar style="auto" />
    </View>
  );
};

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <ScrollView style={styles.container}>
        <Text>Home page</Text>
        
        <StatusBar style="auto" />
      </ScrollView>

              
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbutton} activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
            <Image source={require('./assets/navicons/homeicon.png')}/>
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navbutton} activeOpacity={0.5}>
            <Image source={require('./assets/navicons/requesticon.png')}/>
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}>Request Services</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navbutton} activeOpacity={0.5} onPress={() => navigation.navigate('Profile')}>
            <Image source={require('./assets/navicons/usericon.png')}/>
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}>Profile</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
      
  );
};

const Profile = ({ navigation }) => {
  return (
    <View>
      <Text>Profile</Text>
      
      {/* <NavigationBar/> */}
      <View style={styles.navbar}>
        <Button title="Home" onPress={() => navigation.navigate('Home')}></Button>
        <Button title="Request Services"></Button>
        <Button title="Profile" onPress={() => navigation.navigate('Profile')}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "Home" component = {Home}/>
        <Stack.Screen name = "Profile" component = {Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;