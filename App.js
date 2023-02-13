import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import AppbarComponent from './src/components/TestComponent';
export default function Main() {
  return (
    <PaperProvider theme={{version: 3}}>
      <AppbarComponent/>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);