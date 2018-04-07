import React from 'react';
import {
    View,
    Text
} from 'react-native';
import style from './style';
import Icon from 'react-native-vector-icons/FontAwesome';

class Main extends React.Component {
    static navigatorStyle = {
        navBarHidden: true
      }
    render(){
        return(
            <View style={style.container}>
                <Icon
                    name='home'
                    style={{
                        color:'red',
                        fontSize: 20
                    }}
                />
                <Text
                    style={{
                        fontFamily:'Roboto-Light'
                    }}
                >
                    Loading
                </Text>
            </View>
        )
    }
}
export default Main;