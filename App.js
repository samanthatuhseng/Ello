import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Button, Text, View } from 'react-native';


const Stack = createNativeStackNavigator();

// import Welcome from './assets/components/testcomponent'

// SAM READ THIS: https://reactjs.org/docs/components-and-props.html
// const Sam = () => {
//   return (
//     <View>
//       <Button onPress={() => Alert.alert("I got clicked!")} title="Click me!" color="#000" accessibilityLabel="Click me to learn more about what I do!"/>
//     </View>
//   )
// }

// const SamPonent = () => {
//   return (
//     <View>
//       <Sam/>
//       <Sam/>
//       <Sam/>
//     </View>
//   )
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Ello</Text>
//       {/* <SamPonent/> */}
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;