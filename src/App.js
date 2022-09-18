import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, TextInput, StyleSheet, Button, Text, View, ScrollView } from 'react-native';
// import { render } from 'ejs';
 
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
    width: "70%"
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
    <ScrollView>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
      </ScrollView>
 
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
    </ScrollView>
     
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
    </View>
  );
};
 
const Services = ({ navigation }) => {
  return (
    <ScrollView>
      <ScrollView style={styles.container}>
        <StatusBar style="auto" />
      </ScrollView>
 
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
    </ScrollView>
     
  );
};
 
const Profile = ({ navigation }) => {
  return (
    <View>
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