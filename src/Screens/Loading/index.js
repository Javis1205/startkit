import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import style from './style';
import * as actions from '../../redux/actions';
import {connect} from 'react-redux';

class Main extends React.Component {
    static navigatorStyle = {
        navBarHidden: true
      }
    render(){
        return(
            <View style={style.container}>
                <TouchableOpacity 
                    onPress={()=>{
                        this.props.dispatch(actions.changeAppRoot('after-login'))
                    }}
                >
                    <Text>
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps)(Main);