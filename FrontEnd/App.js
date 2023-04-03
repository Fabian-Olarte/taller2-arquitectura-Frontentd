import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './src/navigation/MainNavigation';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

export default function App() {

  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <MainNavigation />
      </View>
    </SafeAreaProvider>

  );
}


