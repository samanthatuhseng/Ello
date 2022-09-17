import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Button, Text, View } from 'react-native';
// import { render } from 'ejs';


const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navbar: {
    width: "100%",
    // top: "40%",
    // height: 100
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  navbutton: {
    backgroundColor: 'red',
    color: 'red'
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
    <View style={styles.container}>
      <Text>Home page</Text>

      <View style={styles.navbar}>
        <Button styles={styles.navbutton} title="Home" onPress={() => navigation.navigate('Home')}></Button>
        <Button title="Request Services"></Button>
        <Button title="Profile" onPress={() => navigation.navigate('Profile')}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
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