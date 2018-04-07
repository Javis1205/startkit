import React from 'react';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/config/RegisScreen';
import {store} from './src/redux/store';
import {Provider} from "react-redux";
import * as actions from './src/redux/actions';

registerScreens(store, Provider);
// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'startkit.loading', // unique ID registered with Navigation.registerScreen
//     title: 'Welcome', // title of the screen as appears in the nav bar (optional)
//   }
// });
export default class  extends React.Component {
  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(actions.appInitialized());
  }
  onStoreUpdate() {
    const {root} = store.getState().app;
    if (this.currentRoot != root) {
      this.currentRoot = root;
      this.startApp(root);
    }
  }
  startApp(root) {
      switch (root) {
        case 'login':
          Navigation.startSingleScreenApp({
            screen: {
              screen: 'startkit.loading',
            },
          });
        return;
        case 'after-login':
          Navigation.startTabBasedApp({
            tabs: [
              {
                label: 'Tìm kiếm',
                screen: 'startkit.screen1',
              },
              {
                label: 'Yêu thích',
                screen: 'startkit.screen2',
              },
            ],
            drawer: { // optional, add this if you want a side menu drawer in your app
              left: { // optional, define if you want a drawer from the left
                screen: 'startkit.drawer', // unique ID registered with Navigation.registerScreen
                passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
                fixedWidth: 500, // a fixed width you want your left drawer to have (optional)
              },
            },
            animationType: 'fade',
          });
        return;
        default:    
      }
  }
}