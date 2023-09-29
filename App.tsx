import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

// import Reactotron from 'reactotron-react-native';
import Routes from './src/Routes';
import DefaultScreen from './src/components/DefaultScreen';

// Reactotron.configure().useReactNative().connect();

export default function App() {
  return <DefaultScreen>
    <Routes />
  </DefaultScreen>
}