import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from 'expo-font';

//imports
import Dashboard from './components/Dashboard';
import NotificationScreen1 from './components/NotificationScreen1';
import Login from './components/Login';
import PolicyInformation from './components/PolicyInformation';
import ClaimHistory from './components/ClaimHistory';
import ClaimHistoryDetails from './components/CliamHistoryDetails';
import NoClaimsFoundPage from './components/NoClaimsFoundPage';
import FileClaimScreen1 from './components/FileClaimScreen1';
import FileClaimScreen2 from './components/FileClaimScreen2';
import FileClaimScreen3 from './components/FileClaimScreen3';
import Servicing from './components/Servicing';
import MyAccount from './components/MyAccount';
import ForgotPasswordScreen1 from './components/ForgotPasswordScreen1';
import ForgotPasswordScreen2 from './components/ForgotPasswordScreen2';
import ForgotPasswordScreen4 from './components/ForgotPasswordScreen4';
import ForgotPasswordScreen3 from './components/ForgotPasswordScreen3';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    }
  }

  async loadFonts() {
    await Font.loadAsync({
      'Poppins_medium': require('./assets/assets/fonts/Poppins_medium.ttf'),
      "DM_Sans_medium": require('./assets/assets/fonts/DM_Sans_medium.ttf'),
      "DM_Sans_regular": require('./assets/assets/fonts/DM_Sans_regular.ttf'),
      "DM_Sans_bold": require('./assets/assets/fonts/DM_Sans_bold.ttf'),
      "Roboto_bold": require('./assets/assets/fonts/Roboto_bold.ttf'),
      "Inter_semibold": require('./assets/assets/fonts/Inter_semibold.ttf'),
      "Inter_bold": require('./assets/assets/fonts/Inter_bold.ttf'),
      "Poppins_regular": require('./assets/assets/fonts/Poppins_regular.ttf'),
      "Inter_regular": require('./assets/assets/fonts/Inter_regular.ttf'),
      "Poppins_bold": require('./assets/assets/fonts/Poppins_bold.ttf'),
      "Poppins_semibold": require('./assets/assets/fonts/Poppins_semibold.ttf'),
      "Inter_medium": require('./assets/assets/fonts/Inter_medium.ttf'),
      "Inter_regular_italic": require('./assets/assets/fonts/Inter_regular_italic.ttf'),
      "Inter_extrabold": require('./assets/assets/fonts/Inter_extrabold.ttf'),
      "Plus_Jakarta_Sans_regular": require('./assets/assets/fonts/Plus_Jakarta_Sans_regular.ttf'),
      "Plus_Jakarta_Sans_bold": require('./assets/assets/fonts/Plus_Jakarta_Sans_bold.ttf'),
      "Plus_Jakarta_Sans_semibold": require('./assets/assets/fonts/Plus_Jakarta_Sans_semibold.ttf'),
      "Work_Sans_medium": require('./assets/assets/fonts/Work_Sans_medium.ttf'),
      "Work_Sans_regular": require('./assets/assets/fonts/Work_Sans_regular.ttf'),
      "Work_Sans_semibold": require('./assets/assets/fonts/Work_Sans_semibold.ttf'),
      "Work_Sans_bold": require('./assets/assets/fonts/Work_Sans_bold.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();

  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={styles.container}>

          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name='Login' component={Login} />
              <Stack.Screen name="ForgotPasswordScreen1" component={ForgotPasswordScreen1}/>
              <Stack.Screen name="ForgotPasswordScreen2" component={ForgotPasswordScreen2}/>
              <Stack.Screen name="ForgotPasswordScreen3" component={ForgotPasswordScreen3}/>
              <Stack.Screen name="ForgotPasswordScreen4" component={ForgotPasswordScreen4}/>
              <Stack.Screen name='Dashboard' component={Dashboard} />
              <Stack.Screen name='NotificationScreen1' component={NotificationScreen1} />
              <Stack.Screen name='PolicyInformation' component={PolicyInformation} />
              <Stack.Screen name="ClaimHistory" component={ClaimHistory} />
              <Stack.Screen name="NoClaimsFoundPage" component={NoClaimsFoundPage} />
              <Stack.Screen name="ClaimHistroyDetails" component={ClaimHistoryDetails} />
              <Stack.Screen name='FileClaimScreen1' component={FileClaimScreen1} />
              <Stack.Screen name='FileClaimScreen2' component={FileClaimScreen2} />
              <Stack.Screen name='FileClaimScreen3' component={FileClaimScreen3} />
              <Stack.Screen name="Servicing" component={Servicing} />
              <Stack.Screen name="MyAccount" component={MyAccount} />
             
            </Stack.Navigator>
          </NavigationContainer>
          <StatusBar style="auto" />
        </View>
      );
    } else {
      return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export const FontFamily = {
  poppinsMedium: "Poppins_medium",
  bodyMain: "DM_Sans_medium",
  captionSubdue: "DM_Sans_regular",
  subHeadlineMain: "DM_Sans_bold",
  robotoBold: "Roboto_bold",
  interSemibold: "Inter_semibold",
  interBold: "Inter_bold",
  poppinsRegular: "Poppins_regular",
  interRegular: "Inter_regular",
  poppinsBold: "Poppins_bold",
  poppinsSemibold: "Poppins_semibold",
  interMedium: "Inter_medium",
  interRegularItalic: "Inter_regular_italic",
  interExtrabold: "Inter_extrabold",
  plusJakartaSansRegular: "Plus_Jakarta_Sans_regular",
  plusJakartaSansBold: "Plus_Jakarta_Sans_bold",
  plusJakartaSansSemibold: "Plus_Jakarta_Sans_semibold",
  buttonTextCryptoFilled: "Work_Sans_medium",
  bodyTextCrypto: "Work_Sans_regular",
  subheading: "Work_Sans_semibold",
  workSansBold: "Work_Sans_bold",
};