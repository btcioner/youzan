/**
 * Created by ralap on 16-10-2.
 */
import * as React from 'react';
import { View, Navigator } from 'react-native';
import Home from './src/containers/Home';
import Splash from './src/components/Splash';

export default class Root extends React.Component {
    renderScene(route, navigator) {
        let Component = route.component;
        _navigator = navigator;
        return (
            <Component navigator={navigator} route={route} />
        );
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {
       return (
           <View style={{flex: 1}}>
               <Navigator
                   ref="navigator"
                   configureScene={this.configureScene}
                   renderScene={this.renderScene}
                   initialRoute={{
                       component: Splash,
                       name: 'Splash'
                   }}/>
           </View>
       )
    }
}
