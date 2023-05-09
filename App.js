import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//imports
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PolicyInformation from './components/PolicyInformation';
import ClaimHistory from './components/ClaimHistory';
import ClaimHistoryDetails from './components/CliamHistoryDetails';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ClaimHistroyDetails" component={ClaimHistoryDetails}/>
          <Stack.Screen name="ClaimHistory" component={ClaimHistory} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
          <Stack.Screen name='PolicyInformation' component={PolicyInformation} />
          {/* <Stack.Screen name="ClaimHistory" component={ClaimHistory} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
