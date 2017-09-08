import {StackNavigator} from 'react-navigation';
import MyHomeScreen from './screen/MyHomeScreen'
import ProfileNavigator from './ProfileNavigator'
import MyHeaderTestScreen from './screen/MyHeaderTestScreen'

const ModalStack = StackNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    ProfileNavigator: {
        screen: ProfileNavigator,
    },
    HeaderTest: {
        screen: MyHeaderTestScreen,
    },
}, {
    mode: 'modal',

});

export default ModalStack;