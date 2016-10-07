/**
 * Created by xiejinbin on 16-10-2.
 */
import * as React from 'react';
import { Text } from 'react-native';

export default class Sort extends React.Component {
    componentWillMount() {

    }
    render() {
        return (
            <Text>{this.props.text}</Text>
        )
    }
}
