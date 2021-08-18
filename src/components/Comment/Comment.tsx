import React, { FC, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { AppText } from "../../ui/AppText";
import { Avatar } from "../../ui/Avatar";
import { Row } from "../../ui/Row";
import styled from "styled-components/native";
import { IComment } from "../../store/ducks/comment/types";
import { selectors } from "../../store/ducks";
import { useAppSelector } from "../../store/hooks";
import { AppModal } from "../../ui/AppModal";
import { Button } from "../../ui/Button";
import { EditableComment } from "../EditableComment";
const src = "https://sun1-84.userapi.com/s/v1/ig2/KaYR6LGXCEg9pNmHl9mCB-uTZc8aN5-dKa5xYF2COoYZyB3GLX9bgVkAmhPSwaJhKFpqv_YnYbL-YmekB7MqhIs3.jpg?size=100x100&quality=96&crop=0,0,453,453&ava=1"

const Comment: FC<IComment> = ({body, created, ...outerProps}) => {

    const [isEditedMode, setEditMode] = useState(false);

    const activeEditMode = () => {
        setEditMode(true);
    }

    const offEditMode = () => {
        setEditMode(false);
    }

    const {name} = useAppSelector(selectors.user.selectUser);
    if (isEditedMode) {
        return (
            <AppModal>
                <EditableComment body={body} created={created} {...outerProps}/>
                <Button title="close" onPress={offEditMode}/>
            </AppModal>
        )
    }
    return (
        <TouchableOpacity onLongPress={activeEditMode}>
            <Row css="padding:17px 0; border-top-color:#E5E5E5; border-top-width: 1px; border-style: solid;">
                <Avatar width={40} css="margin-right: 12px;" src={src} />
                <View>
                    <Row>
                        <PositionBox>
                            <AppText bold>{name}</AppText>
                        </PositionBox>
                        <AppText fs={13} color={colors.ligthGray}>{created}</AppText>
                    </Row>
                    <AppText>{body}</AppText>
                </View>
            </Row>
        </TouchableOpacity>
    );
};

const PositionBox = styled.View`
    margin-right: 6px;
`

export default Comment;
