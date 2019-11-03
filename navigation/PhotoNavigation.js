import {createMaterialTopTabNavigator} from "react-navigation-tabs"
import SelectPhoto from "../screens/Photo/SelectPhoto"
import TakePhoto from "../screens/Photo/TakePhoto"
import UploadPhoto from "../screens/Photo/UploadPhoto"
import { createStackNavigator } from "react-navigation-stack";
import { stackStyles } from "./config";
import styles from "../styles";

const PhotoTabs = createMaterialTopTabNavigator({
    Select:{
        screen:SelectPhoto,
        navigationOptions:{
            tabBarLabel: "Select"
        }
    },

    Take:{
        screen:TakePhoto,
        navigationOptions:{
            tabBarLabel: "Take"
        }
    },
},
{
    tabBarPosition:"bottom",
    tabBarOptions:{
        indicatorStyle:{
            backgroundColor:styles.blackColor,
            marginBottom:5
        },
        labelStyle:{
            color:styles.blackColor,
            fontWeight:"600"
        },
        style:{
            paddingBottom:15,
            ...stackStyles
        }
    },

}
)

export default createStackNavigator({
    Tabs:{
        screen: PhotoTabs,
        navigationOptions:{
            header: null
        }
    },
    UploadPhoto
},
{
    defaultNavigationOptions:{
        headerStyle:{
            ...stackStyles
        }
    }
}

);
