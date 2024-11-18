import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import AboutScreen from './Screens/AboutScreen';
import CustomHeader from './Component/Header';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        header: ({navigation, route, options}) => (
          <CustomHeader
            navigation={navigation}
            title={options.title || route.name}
            squareBack={options.squareBack}
          />
        ),
      }}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{title: '', squareBack: true}}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{title: 'About'}}
      />
    </Stack.Navigator>
  );
}

const RootNavigation = props => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
