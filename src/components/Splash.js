/**
 * Created by ralap on 16-10-7.
 */
import * as React from 'react';
import { Dimensions, InteractionManager, View, Image } from 'react-native';
var {height, width} = Dimensions.get('window');
import Home from '../containers/Home';
export default class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {navigator} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: Home,
                    name: 'Home'
                });
            });
        }, 2500);
    }

    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{flex: 1, width: width, height: height}}
                    source={require('../assets/image/home.png')}/>
            </View>
        );
    }
}
