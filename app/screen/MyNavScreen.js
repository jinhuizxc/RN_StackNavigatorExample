/**
 * toggle 切换
 */

import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Button,
} from 'react-native';
import SampleText from '../SampleText'

const MyNavScreen = ({navigation, banner}) => (
    <ScrollView>
        <SampleText>{banner}</SampleText>
        <Button
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
            title="go to profile screen"/>
        <Button
            onPress={() => navigation.navigate('HeaderTest')}
            title="Go to a header toggle screen"/>
        {
            navigation.state.routeName === 'HeaderTest' &&
            <Button title="Toggle Header"
                    onPress={() => navigation.setParams({
                        headerVisible: !navigation.state.params ||
                        !navigation.state.params.headerVisible,
                    })}/>
        }
        {/*返回上一页*/}
        <Button onPress={() => navigation.goBack(null)} title="Go back"/>

    </ScrollView>
);

export default MyNavScreen;