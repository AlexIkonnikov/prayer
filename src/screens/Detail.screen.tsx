import { useNavigation, useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { ScrollView } from "react-native";
import { AddCommentForm } from "../components/AddCommentForm";
import { CommentList } from "../components/CommentList";
import { MemberList } from "../components/MemberList";
import { actions, selectors } from "../store/ducks";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { colors } from "../styles/colors";
import { DetailScreenNavigationProp, DetailScreenRouterProp } from "../types";
import { DetailHeader } from "../ui/DetailHeader";
import { BackArrow } from "../ui/icons/BackArrow";
import { Hands } from "../ui/icons/Hands";
import { LastTime } from "../ui/LastTime";
import { Statisticks } from "../ui/Statisticks";

const src = ["https://sun1-84.userapi.com/s/v1/ig2/KaYR6LGXCEg9pNmHl9mCB-uTZc8aN5-dKa5xYF2COoYZyB3GLX9bgVkAmhPSwaJhKFpqv_YnYbL-YmekB7MqhIs3.jpg?size=100x100&quality=96&crop=0,0,453,453&ava=1"];

export const Detail: FC = () => {

    const route = useRoute<DetailScreenRouterProp>();
    const navigation = useNavigation<DetailScreenNavigationProp>();

    const prayer = route.params.prayer;
    const dispatch = useAppDispatch();
    const comments = useAppSelector(selectors.comment.selectCommentsByPrayerId(prayer.id));
    console.log(prayer)

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
                <Statisticks/>
                <MemberList srcs={src} />
                <CommentList comments={comments} />
            </ScrollView>
            <AddCommentForm prayerId={prayer.id}/>
        </React.Fragment>
    )
};