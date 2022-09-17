import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, Alert, StyleSheet, Button, Text, View, ScrollView } from 'react-native';
// import { render } from 'ejs';


// Google Signup API
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
  } from 'react-native-google-signin';
// ^^^

const [loggedIn, setloggedIn] = useState(false);
const [userInfo, setuserInfo] = useState([]);

_signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const {accessToken, idToken} = await GoogleSignin.signIn();
    setloggedIn(true);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      alert('Cancel');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      alert('Signin in progress');
      // operation (f.e. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      alert('PLAY_SERVICES_NOT_AVAILABLE');
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

useEffect(() => {
  GoogleSignin.configure({
    scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
    webClientId:
      '418977770929-g9ou7r9eva1u78a3anassxxxxxxx.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  });
}, []);

signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    setloggedIn(false);
    setuserInfo([]);
  } catch (error) {
    console.error(error);
  }
};

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  navbar: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    // top: "40%",
    // height: 100
    justifyContent: 'space-between',
    postion: "absolute",
    bottom: 0,
  
    // flexDirection: 'column',
  },
  navbutton: {
    display: "flex",
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
      {/* <Button title="Login with Google" onPress={() => navigation.navigate('Home')}></Button> */}

      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn}/>
        
      <StatusBar style="auto"/>
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