import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { IPrayer } from "../store/ducks/prayer"

export type RootStackParamList = {
    ColumnList: undefined
    Column: { name: string, id: number }
    Detail: { prayer: IPrayer }
}

export type AuthNavigationProps = {
    authentication: undefined
    registration: undefined
}

export type TabNavigationProps = {
    'My prayers': { name: string, id: number },
    Subscribed: undefined
}

export type ColumnListScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export type ColumnScreenRouteProp = RouteProp<TabNavigationProps, 'My prayers'>;

export type DetailScreenRouterProp = RouteProp<RootStackParamList, 'Detail'>;

export type DetailScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export type MyPrayerScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export type MyPrayerScreenScreenRouteProp = RouteProp<RootStackParamList, "Column">;