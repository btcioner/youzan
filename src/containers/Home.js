/**
 * Created by xiejinbin on 16-10-2.
 */
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Youzan from '../containers/Youzan';
import Me from '../containers/Me';
import Sort from '../containers/Sort';
import Cart  from '../containers/Cart';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'youzan'
        };
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    title={'有赞'}
                    selected={this.state.selectedTab === 'youzan'}
                    selectedTitleStyle={{color: 'red'}}
                    renderIcon={() => <Icon margin={8} name={'thumbs-up'} size={20} color={'black'}/>}
                    renderSelectedIcon={() => <Icon margin={8} name={'thumbs-up'} size={20} color={'red'}/>}
                    onPress={() => this.setState({selectedTab: 'youzan'})}
                    >
                    <Youzan {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title={'分类'}
                    selected={this.state.selectedTab === 'sort'}
                    selectedTitleStyle={{color: 'red'}}
                    renderIcon={() => <Icon margin={8} name={'search'} size={20} color={'black'}/>}
                    renderSelectedIcon={() => <Icon margin={8} name={'search'} size={20} color={'red'}/>}
                    onPress={() => this.setState({selectedTab: 'sort'})}
                >
                    <Sort {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title={'购物车'}
                    selected={this.state.selectedTab === 'cart'}
                    selectedTitleStyle={{color: 'red'}}
                    renderIcon={() => <Icon margin={8} name={'cart-plus'} size={20} color={'black'}/>}
                    renderSelectedIcon={() => <Icon margin={8} name={'cart-plus'} size={20} color={'red'}/>}
                    onPress={() => this.setState({selectedTab: 'cart'})}
                >
                    <Cart {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title={'我'}
                    selected={this.state.selectedTab === 'me'}
                    selectedTitleStyle={{color: 'red'}}
                    renderIcon={() => <Icon margin={8} name={'user'} size={20} color={'black'}/>}
                    renderSelectedIcon={() => <Icon margin={8} name={'user'} size={20} color={'red'}/>}
                    onPress={() => this.setState({selectedTab: 'me'})}
                >
                    <Me {...this.props}/>
                </TabNavigator.Item>

            </TabNavigator>
        )
    }
}
