import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, TextInput, StyleSheet, Button, Text, View, ScrollView, Alert } from 'react-native';
// import { render } from 'ejs';

import { RadioButton } from 'react-native-paper';
 
// import Login from "./components/Login"
// import Home from "./components/Home"
// import Profile from "./components/Profile"
 
// import Navbar from "./components/"
 
 
const Stack = createNativeStackNavigator();
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navbar: {
    display: "flex",
    width: "100%",
    // top: "40%",
    // height: 100
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  navbutton: {
    backgroundColor: 'white',
  },
  loginbtn: {
    color: 'white',
    width: '80',
    borderColor: '#000000',
    borderWidth: '2'
  },
  loginbtntext: {
    color: 'black'
  },
  loginformcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginform: {
    borderColor: "#000",
    borderWidth: 2,
    width: "70%",
    borderRadius: 60,
    paddingLeft: 10
  },
  loginformbtn: {
  
  },
  profilecontainer: {
    flex: 1,
    backgroundColor: '#fff',
    display: 'flex',
    paddingTop: 80,
    alignItems: 'center',

  },
  profile_picture: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 50,
    width: 80,
    height: 80
  },
  profileform: {
    width: 100,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 60,
    paddingLeft: 10
  }
});
 
 
// Pages
 
const Login = ({ navigation }) => {
  {/*Button not linked yet, just takes u to home page to prove it works!*/}
  return (
    <View style={styles.container}>
      <Image source={require('./assets/homebg.png')}></Image>
 
      {/* <TouchableOpacity onPress={() => navigation.navigate("LoginForm")}>
        <View style={styles.loginbtn}>
            <Text style={styles.loginbtntext}>Login</Text>
        </View>
      </TouchableOpacity> */}
 
        {/* <TouchableOpacity style={styles.loginbtn} activeOpacity={0.5} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginbtntext}>Login</Text>
        </TouchableOpacity> */}
  
      <Button title="Login" onPress={() => navigation.navigate("LoginForm")}></Button>
      <Text></Text>
      {/* Adds a new line in between the buttons */}
      <Button title="Sign Up!" onPress={() => navigation.navigate("Profile")}></Button>
 
      <StatusBar style="auto"/>
    </View>
  );
};
 
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text>Home</Text>
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbutton} activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
            <Image source={require('./assets/navicons/homeicon.png')}/>
            <View style={styles.SeparatorLine} />
            <Text style={styles.TextStyle}>Home</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.navbutton} activeOpacity={0.5} onPress={() => navigation.navigate('Services')}>
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
    </View>
     
  );
};
 
const LoginForm = ({ navigation }) => {
  const [login_name, onChangeText_name] = React.useState("");
  const [login_password, onChangeText_password] = React.useState("");

  return (
    <View style={styles.loginformcontainer}>
      <Text>First Name:</Text>
      <TextInput style={styles.loginform} onChangeText={onChangeText_name} value={login_name}/>
      
      <Text>Password:</Text>
      <TextInput style={styles.loginform} onChangeText={onChangeText_password} value={login_password}/>

      <Text></Text>
      <Button style={styles.loginformbtn} title="Login" onPress={() => Alert.alert("Login!")}></Button>
    </View>
  );
};
 
const Services = ({ navigation }) => {
  return (
      <View style={styles.container}>
            <View style={styles.navbar}>
              <TouchableOpacity style={styles.navbutton} activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
                  <Image source={require('./assets/navicons/homeicon.png')}/>
                  <View style={styles.SeparatorLine} />
                  <Text style={styles.TextStyle}>Home</Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={styles.navbutton} activeOpacity={0.5} onPress={() => navigation.navigate('Services')}>
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
          <StatusBar style="auto" />
      </View>
  );
};
 
const Profile = ({ navigation }) => {
  const [profile_first_name, pchange_first_name] = React.useState("");
  const [profile_last_name, pchange_last_name] = React.useState("");
  const [profile_email, pchange_email] = React.useState("");
  const [profile_address, pchange_address] = React.useState("");
  const [profile_dob, pchange_dob] = React.useState("");
  const [profile_ec, pchange_ec] = React.useState("");
  const [profile_ecn, pchange_ecn] = React.useState("");
  
  const [checked, setChecked] = React.useState('Service Provider');

  return (
    <View style={styles.profilecontainer}>
        {/* Profile Forms */}
        <View>
          <Text>Profile</Text>
          <Image style={styles.profile_picture} source={require('./assets/favicon.png')}/>

          {/* Forms below */}
          <Text>First Name:</Text>
          <TextInput style={styles.profileform} onChangeText={pchange_first_name} value={profile_first_name}/>

          <Text>Last Name:</Text>
          <TextInput style={styles.profileform} onChangeText={pchange_last_name} value={profile_last_name}/>

          <Text>Email Address:</Text>
          <TextInput style={styles.profileform} onChangeText={pchange_email} value={profile_email}/>
      
          <Text>Home Address:</Text>
          <TextInput style={styles.profileform} onChangeText={pchange_address} value={profile_address}/>
      
          <Text>Date Of Birth:</Text>
          <TextInput style={styles.profileform} onChangeText={pchange_dob} value={profile_dob}/>
      
          <Text>Emergency Contact:</Text>
          <TextInput style={styles.profileform} onChangeText={pchange_ec} value={profile_ec}/>

          <Text>Emergency Contact Number:</Text>
          <TextInput style={styles.profileform} onChangeText={pchange_ecn} value={profile_ecn}/>

          <Text>Service Provider</Text>
          <RadioButton
            value="Service Provider"
            status={ checked === 'Service Provider' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Service Provider')}
          />

          <Text>Service Requester</Text>
          <RadioButton
            value="Service Requester"
            status={ checked === 'Service Requester' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Service Requester')}
          />

          {/* Forms above ^^^ */}
        </View>
        {/* Profile Forms */}

        <View style={styles.navbar}>
          <TouchableOpacity style={styles.navbutton} activeOpacity={0.5} onPress={() => navigation.navigate('Home')}>
              <Image source={require('./assets/navicons/homeicon.png')}/>
              <View style={styles.SeparatorLine} />
              <Text style={styles.TextStyle}>Home</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.navbutton} activeOpacity={0.5} onPress={() => navigation.navigate('Services')}>
              <Image source={require('./assets/navicons/requesticon.png')}/>
              <View style={styles.SeparatorLine} />
              <Text style={styles.TextStyle}>Request Services</Text>
          </TouchableOpacity>
 
          <TouchableOpacity style={styles.navbutton + "opacity: 0.2"} activeOpacity={0.5} onPress={() => navigation.navigate('Profile')}>
              <Image source={require('./assets/navicons/usericon.png')}/>
              <View style={styles.SeparatorLine} />
              <Text style={styles.TextStyle}>Profile</Text>
          </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = "Login" component = {Login}/>
        <Stack.Screen name = "Home" component = {Home}/>
        <Stack.Screen name = "Services" component = {Services}/>
        <Stack.Screen name = "Profile" component = {Profile}/>
        <Stack.Screen name = "LoginForm" component = {LoginForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;