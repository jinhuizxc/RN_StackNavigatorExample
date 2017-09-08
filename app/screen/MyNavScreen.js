import React from 'react';
import {Button, ScrollView, StyleSheet} from 'react-native'
import SampleText from "../SampleText";

const MyNavScreen = ({navigation, banner}) => (
    <ScrollView>
        <SampleText>{banner}</SampleText>
        <Button
            onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
            title="Go to a profile screen"
        />
        <Button
            onPress={() => navigation.navigate('Photos', {name: 'Jane'})}
            title="Go to a photos screen"
        />
        <Button
                onPress={() => navigation.goBack(null)}
                title="Go back"/>
    </ScrollView>
);

export default MyNavScreen;

