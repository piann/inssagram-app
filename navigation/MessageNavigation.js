import { createStackNavigator } from "react-navigation-stack";
import Message from "../screens/Message/Message";
import Messages from "../screens/Message/Messages";
import { stackStyles } from "./config";



export default createStackNavigator({
    Messages,
    Message,
    },
    {
    defaultNavigationOptions:{
        headerStyles:{
            ...stackStyles
        }
    }
});