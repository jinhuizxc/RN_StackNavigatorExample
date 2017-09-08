import React, {Component} from 'react';

import MyNavScreen from "./MyNavScreen";

const MyProfileScreen = ({navigation}) => (
    <MyNavScreen banner={`${navigation.state.params.name}`} navigation={navigation}/>
);

//似乎不起作用！
MyProfileScreen.navigationOptions = ({navigation})=>({
   title:`${navigation.state.params.name}'s Profile!` ,
});

export default MyProfileScreen;
