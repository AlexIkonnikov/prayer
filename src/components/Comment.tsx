import React, {FC} from "react";
import { Text } from "react-native-svg";
import { Avatar } from "../ui/Avatar";
import { Row } from "../ui/Row";

interface IComment {
    user: {
        name: string,
        avatar: string
    }
    message: string
    time: string
}

const Comment: FC<IComment> = ({user, message, time}) => {
    return (
        <Row>
            <Avatar src={user.avatar}/>
        </Row>
    )
}