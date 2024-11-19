import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import CustomHeader from './Component/Header';
import StartupScreen from './Screens/StartupScreen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {LightTheme} from './Theme/colors';
import RegistrationScreen from './Screens/RegistrationScreen';
import FillProfileInfoScreen from './Screens/FillProfileInfoScreen';
import ScreenEnums from './Screens/ScreenEnums';

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: LightTheme.colors.white,
  },
};

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenEnums.Startup}
      screenOptions={{
        header: ({navigation, route, options}) => (
          <CustomHeader
            navigation={navigation}
            title={options.title}
            squareBack={options.squareBack}
          />
        ),
      }}>
      <Stack.Screen
        name={ScreenEnums.Startup}
        component={StartupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreenEnums.Login}
        component={LoginScreen}
        options={{squareBack: true}}
      />
      <Stack.Screen
        name={ScreenEnums.Registration}
        component={RegistrationScreen}
      />
      <Stack.Screen
        name={ScreenEnums.FillProfile}
        component={FillProfileInfoScreen}
      />
    </Stack.Navigator>
  );
}

const RootNavigation = props => {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
