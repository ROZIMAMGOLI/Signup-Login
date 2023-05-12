import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import SafeAreaView from 'react-native-safe-area-view';
import AuthNavigator from './src/navigation/AuthNavigator';

export default function App() {
  // isAuthenticated = is...
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
    </NavigationContainer>
  );
}