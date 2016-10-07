/**
 * Created by xiejinbin on 16-10-2.
 */
import * as React from 'react';
import { Dimensions, Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, Navigator, InteractionManager } from 'react-native';
import Swiper from 'react-native-swiper';
import WebViewDetail from '../containers/WebView';

const SLIDER_IMG = [
    require('../assets/image/image1.jpeg'),
    require('../assets/image/image2.jpeg'),
    require('../assets/image/image3.jpg'),
    require('../assets/image/image4.jpeg'),
    require('../assets/image/image5.jpg')
];
export default class Youzan extends React.Component {
    constructor(props) {
        super(props);
        //把props传过去，否则会undefined
        this._pressButton = this._pressButton.bind(this);
    }

    _pressButton(url) {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            navigator.push({
                component: WebViewDetail,
                name: 'WebViewDetail',
                params: {
                    url: url
                }
            });
        });
    }
    render() {
        return (
            <View style={{backgroundColor:'#f5f5f5',flex:1}}>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                    <Swiper
                        height={200}
                        loop={true}
                        autoplay={true}
                        dot={<View style={styles.customDot}/>}
                        activeDot={<View style={styles.customActiveDot}/>}
                        paginationStyle={{
                            bottom: 10
                        }}>
                        {SLIDER_IMG.map((item,i) => {
                            return (
                                <TouchableOpacity key={i}
                                activeOpacity={0.75}>
                                  <Image
                                        style={styles.bannerImage}
                                        source={item}/>
                                </TouchableOpacity>
                            )
                        })}
                    </Swiper>
                    <View style={{backgroundColor: 'white', marginTop: 8}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <TouchableOpacity
                                    activeOpacity={0.75}
                                    onPress={() => this._pressButton('https://maijia.koudaitong.com/mars/activity/groupon')}>
                                    <Image
                                        style={{width: Dimensions.get('window').width * 0.5, height: 207, padding: 8}}
                                        source={{uri: 'https://img.yzcdn.cn/upload_files/2016/09/30/FqiNSPGDegFhEMzLBexAMDNevHSa.png'}} />
                                </TouchableOpacity>

                            </View>
                            <View style={{flex: 1}}>
                                <TouchableOpacity
                                    activeOpacity={0.75}
                                    onPress={() => this._pressButton('https://maijia.koudaitong.com/mars/activity/discount')}>
                                    <Image
                                        style={{width: Dimensions.get('window').width * 0.5, height: 207, padding: 8}}
                                        source={{uri: 'https://img.yzcdn.cn/upload_files/2016/09/30/Fk3pxwPKbSKNX2fens5yZfFNdXqA.png'}} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{marginTop:8,backgroundColor:'white'}}>
                        <View style={{height:40,justifyContent:'center',alignItems:'center'}}><Text>最热商品推荐</Text></View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>{ }}>
                                    <Image source={{uri: 'https://img.yzcdn.cn/upload_files/2016/09/28/Fhkbt2VcgpdetzXX5URqlg_ndM0M.jpg?imageView2/2/w/320/h/0/q/75/format/webp'}} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text >【9.9元秒杀】酥脆薄饼 300g 原味/海苔味 每个ID限购3份 （全场满68元包邮）</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>{ }}>
                                    <Image source={{uri: 'https://img.yzcdn.cn/upload_files/2016/08/09/ForxcopNm4a8j2RB8b8D8veVYFP3.jpg?imageView2/2/w/320/h/0/q/75/format/webp'}} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text >苹果安卓二合一手机通用数据线 充电线 尼龙USB2A铜芯1拖2</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>{ }}>
                                    <Image source={{uri: 'https://img.yzcdn.cn/upload_files/2016/07/23/FtGFtYTk_j7lAuRCJOkuXLDtYNcs.jpg?imageView2/2/w/320/h/0/q/75/format/webp'}} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text>【达达令读者专享】氨基酸温和洁净洁面乳/净润平衡洁面乳 两支送两片王牌补水面膜</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:10,paddingBottom:10}}>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>{}}>
                                    <Image source={require('../assets/image/img.png')} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text>叶书 master</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>{}}>
                                    <Image source={require('../assets/image/img.png')} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text>微餐咖啡</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>{}}>
                                    <Image source={require('../assets/image/img.png')} style={{width:105,height:105}}/>
                                    <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                        <Text>多伦多海鲜自助</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>

        )
    }
}

const styles = StyleSheet.create(
    {
        bannerImage: {
            height: 200,
            width: Dimensions.get('window').width,
        },
        customDot: {
            backgroundColor: '#ccc',
            height: 1.5,
            width: 15,
            marginLeft: 2,
            marginRight: 2,
            marginTop: 2,
        },
        customActiveDot: {
            backgroundColor: 'white',
            height: 1.5,
            width: 15,
            marginLeft: 2,
            marginRight: 2,
            marginTop: 2,
        },
    }
);
