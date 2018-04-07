import {Navigation} from    'react-native-navigation';
import Loading from '../Screens/Loading';
import Screen1 from '../Screens/Screen1';
import Screen2 from '../Screens/Screen2';
import Drawer from '../Screens/Drawer';
import { store } from '../redux/store';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('startkit.loading', () => Loading,store,Provider);
    Navigation.registerComponent('startkit.screen1', () => Screen1,store,Provider);
    Navigation.registerComponent('startkit.screen2', () => Screen2,store,Provider);
    Navigation.registerComponent('startkit.drawer', () => Drawer,store,Provider);
}