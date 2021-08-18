import { useNavigation, useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { ScrollView } from "react-native";
import { CommentList } from "../components/CommentList";
import { MemberList } from "../components/MemberList";
import { actions } from "../store/ducks";
import { useAppDispatch } from "../store/hooks";
import { colors } from "../styles/colors";
import { DetailScreenNavigationProp, DetailScreenRouterProp } from "../types";
import { DetailHeader } from "../ui/DetailHeader";
import { BackArrow } from "../ui/icons/BackArrow";
import { Hands } from "../ui/icons/Hands";
import { LastTime } from "../ui/LastTime";
import { Row } from "../ui/Row";
import { Square } from "../ui/Square";
const avatars = [
    "https://sun1-84.userapi.com/s/v1/ig2/KaYR6LGXCEg9pNmHl9mCB-uTZc8aN5-dKa5xYF2COoYZyB3GLX9bgVkAmhPSwaJhKFpqv_YnYbL-YmekB7MqhIs3.jpg?size=100x100&quality=96&crop=0,0,453,453&ava=1",
];
const comments = [
    { user: { name: 'Elena Test', avatar: avatars[0] }, message: 'Hello!', time: '2 days ago' },
];

export const Detail: FC = () => {

    const route = useRoute<DetailScreenRouterProp>();
    const navigation = useNavigation<DetailScreenNavigationProp>();

    const prayer = route.params.prayer;

    const dispatch = useAppDispatch();

    const goBack = () => {
        navigation.goBack();
    }

    const updatePrayer = (title: string) => {
        dispatch(actions.prayer.updatePrayerRequest(
            {
                id: prayer.id,
                title,
                description: prayer.description,
                checked: prayer.checked
            }
        )
        );
    }

    return (
        <React.Fragment>
            <DetailHeader title={prayer.title} submit={updatePrayer}>
                <BackArrow onPress={goBack} />
                <Hands color={colors.white} />
            </DetailHeader>
            <ScrollView>
                <LastTime timeInMin={21} />
                <Row>
                    <Square />
                    <Square />
                </Row>
                <Row css="margin-bottom:20px;">
                    <Square />
                    <Square />
                </Row>
                <MemberList srcs={avatars} />
                <CommentList comments={comments} />
            </ScrollView>
        </React.Fragment>
    )
};