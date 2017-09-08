import React, {Component} from 'react';
import MyNavScreen from "./MyNavScreen";

const MyHeaderTestScreen = ({ navigation }) => (
    <MyNavScreen banner={`Full screen view`} navigation={navigation} />
);

MyHeaderTestScreen.navigationOptions = ({ navigation }) => {
    const headerVisible =
        navigation.state.params && navigation.state.params.headerVisible;
    return {
        header: headerVisible ? undefined : null,
        title: 'Now you see me',
    };
};

export default MyHeaderTestScreen;