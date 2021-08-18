import React, { FC } from "react";
import { IComment } from "../../store/ducks/comment/types";
import { colors } from "../../styles/colors";
import { AppText } from "../../ui/AppText";
import { Container } from "../../ui/Container";
import Comment from "../Comment/Comment";

interface CommentListProps {
    comments: Array<IComment>
}

const CommentList: FC<CommentListProps> = ({ comments }) => {

    return (
        <Container>
            <AppText
                fs={13}
                color={colors.blue}
                bold
                upp
                css="margin-bottom: 15px;"
            >Comments</AppText>
            {comments.map((comment, index) => {
                return <Comment {...comment} key={index} />;
            })}
        </Container>
    )
};

export default CommentList;