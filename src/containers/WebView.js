/**
 * Created by xieJinBin on 16-10-3.
 */
import * as React from 'react';
import { WebView, View, Text } from 'react-native';
import LoadingView from '../components/LoadingView';

const WEBVIEW_REF = 'webview';

export default class WebViews extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: this.props.route.params.url
        }
    }

    componentWillReceiveProps() {
        this.setState = {
            url: this.props.route.params.url
        };
    }

    renderLoading() {
        return <LoadingView />;
    }

    render() {
        console.log(this.state.url);
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <WebView
                    ref={WEBVIEW_REF}
                    source={{uri: this.state.url}}
                    automaticallyAdjustContentInsets={false}
                    style={{ flex: 1 }}
                    javaScriptEnabled
                    domStorageEnabled
                    startInLoadingState
                    scalesPageToFit
                    decelerationRate="normal"
                    onShouldStartLoadWithRequest={() => {
                        const shouldStartLoad = true;
                        return shouldStartLoad;
                    }}
                    renderLoading={this.renderLoading}
                />
            </View>
        )
    }
}
