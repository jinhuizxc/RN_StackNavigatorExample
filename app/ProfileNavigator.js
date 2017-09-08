import {StackNavigator} from 'react-navigation';
import MyHomeScreen from "./screen/MyHomeScreen";
import MyProfileScreen from './screen/MyProfileScreen'

const ProfileNavigator = StackNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Profile: {
        path: 'people/:name',
        screen: MyProfileScreen,
    },
}, {
    navigationOptions: {
        header: null,
    }
});

export default ProfileNavigator;