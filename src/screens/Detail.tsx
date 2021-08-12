import React, { FC } from "react";
import { ScrollView } from "react-native";
import { MemberList } from "../components/MemberList";
import { DetailHeader } from "../ui/DetailHeader";
import { LastTime } from "../ui/LastTime";
import { Row } from "../ui/Row";
import { Square } from "../ui/Square";

export const Detail: FC = () => {
    const avatars = [
        "https://sun1-84.userapi.com/s/v1/ig2/KaYR6LGXCEg9pNmHl9mCB-uTZc8aN5-dKa5xYF2COoYZyB3GLX9bgVkAmhPSwaJhKFpqv_YnYbL-YmekB7MqhIs3.jpg?size=100x100&quality=96&crop=0,0,453,453&ava=1",
        "https://sun1-84.userapi.com/s/v1/ig2/KaYR6LGXCEg9pNmHl9mCB-uTZc8aN5-dKa5xYF2COoYZyB3GLX9bgVkAmhPSwaJhKFpqv_YnYbL-YmekB7MqhIs3.jpg?size=100x100&quality=96&crop=0,0,453,453&ava=1" 
    ];
    
    return (
        <React.Fragment>
            <DetailHeader />
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
            </ScrollView>
        </React.Fragment>
    )
};