import React, { FC } from "react";
import { FlatList } from "react-native";
import { colors } from "../../styles/colors";
import { AppText } from "../../ui/AppText";
import { Comment, IComment } from "../../ui/Comment";
import { Container } from "../../ui/Container";

interface CommentListProps {
    comments: Array<IComment>
}

const CommentList: FC<CommentListProps> = ({ comments }) => {
    return (
        <Container>
            <AppText fs={13} color={colors.blue} bold upp>Comments</AppText>
            {comments.map((comment, index) => {
                return <Comment user={comment.user} message={comment.message} time={comment.time} key={comment.user.name + index} />;
            })}
        </Container>
    )
};

export default CommentList;