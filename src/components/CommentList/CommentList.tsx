import React, { FC } from 'react';
import { css } from 'styled-components';
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
      <AppText containerStyled={appTextStyle}>
        Comments
      </AppText>
      {comments.map((comment) => {
        return <Comment {...comment} key={comment.id} />;
      })}
    </Container>
  );
};

const appTextStyle = css`
  font-size: 13px;
  color: ${colors.blue};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 15px;
`

export default CommentList;
