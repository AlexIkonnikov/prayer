import React, { FC } from 'react';
import { IComment } from '../../store/comment/types';
import { colors } from '../../styles/colors';
import { AppText } from '../../ui/AppText';
import { Container } from '../../ui/Container';
import Comment from '../Comment/Comment';

interface CommentListProps {
  comments: Array<IComment>;
}

const CommentList: FC<CommentListProps> = ({ comments }) => {
  return (
    <Container>
      <AppText fs={13} color={colors.blue} bold upp css="margin-bottom: 15px;">
        Comments
      </AppText>
      {comments.map((comment) => {
        return <Comment {...comment} key={comment.id} />;
      })}
    </Container>
  );
};

export default CommentList;
