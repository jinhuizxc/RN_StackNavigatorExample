import {StackNavigator} from 'react-navigation'
import MyHomeScreen from './screen/MyHomeScreen'
import MyProfileScreen from './screen/MyProfileScreen'
import MyPhotosScreen from './screen/MyPhotosScreen'

const SimpleStack = StackNavigator({

    Home:{
        screen: MyHomeScreen,
    },
    Profile:{
        path: 'people/:name',
        screen: MyProfileScreen,
    },
    Photos:{
        path: 'photos/:name',
        screen: MyPhotosScreen,
    }
});

export default SimpleStack;