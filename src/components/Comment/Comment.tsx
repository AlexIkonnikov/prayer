import React, { FC, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../../styles/colors";
import { AppText } from "../../ui/AppText";
import { Avatar } from "../../ui/Avatar";
import { Row } from "../../ui/Row";
import { IComment } from "../../store/ducks/comment/types";
import { actions, selectors } from "../../store/ducks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { StyledContainer } from "../../ui/StyledContainer";
import { EditableForm } from "../../ui/EditableForm";
const src = "https://sun1-84.userapi.com/s/v1/ig2/KaYR6LGXCEg9pNmHl9mCB-uTZc8aN5-dKa5xYF2COoYZyB3GLX9bgVkAmhPSwaJhKFpqv_YnYbL-YmekB7MqhIs3.jpg?size=100x100&quality=96&crop=0,0,453,453&ava=1"

const Comment: FC<IComment> = ({ body, created, id }) => {

    const dispatch = useAppDispatch();

    const [isEditedMode, setEditMode] = useState(false);

    const activeEditMode = () => {
        setEditMode(true);
    };

    const offEditMode = () => {
        setEditMode(false);
    };

    const updateComment = (values: string) => {
        dispatch(actions.comment.updateCommentRequest({id, body: values }));
    };

    const deleteComment = () => {
        dispatch(actions.comment.deleteCommentRequest(id));
    };
    
    const { name } = useAppSelector(selectors.user.selectUser);
    return (
        <>
            <TouchableOpacity onLongPress={activeEditMode}>
                <Row containerStyled={`
                padding:17px 0;
                border-top-color:#E5E5E5; 
                border-top-width: 1px; 
                border-style: solid;`
                }>
                    <Avatar width={40} css="margin-right: 12px;" src={src} />
                    <View>
                        <Row>
                            <StyledContainer containerStyled={`margin-right: 6px;`}>
                                <AppText bold>{name}</AppText>
                            </StyledContainer>
                            <AppText fs={13} color={colors.ligthGray}>{created}</AppText>
                        </Row>
                        <AppText>{body}</AppText>
                    </View>
                </Row>
            </TouchableOpacity>
            <EditableForm 
                visible={isEditedMode}
                value={body} 
                save={updateComment} 
                cancel={offEditMode} 
                deleted={deleteComment}  
            />
        </>
    );
};

export default Comment;
