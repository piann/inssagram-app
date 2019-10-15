import { createStackNavigator} from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import TabNavigation from "./TabNavigation";
import PhotoNavigation from "./PhotoNavigation"
import MessageNavigation from "./MessageNavigation";
import { stackStyles } from "./config";


const MainNavigation = createStackNavigator({
    TabNavigation,
    PhotoNavigation,
    MessageNavigation
    },
    {
        headerMode:"none",
        mode:"modal",
        defaultNavigationOptions:{
            headerStyles:{
                ...stackStyles
            }
        }
    }
);

export default createAppContainer(MainNavigation);

