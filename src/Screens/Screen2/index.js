import React from 'react';
import {
    View,
    Text
} from 'react-native';
import style from './style';

class Main extends React.Component {
    static navigatorStyle = {
        navBarHidden: true
      }
    render(){
        return(
            <View style={style.container}>
                <Text>
                    Loading
                </Text>
            </View>
        )
    }
}
export default Main;