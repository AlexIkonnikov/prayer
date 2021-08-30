import React, { FC, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles/colors';
import { AppText } from '../../ui/AppText';
import { Avatar } from '../../ui/Avatar';
import { Row } from '../../ui/Row';
import { IComment } from '../../store/comment/types';
import { actions, selectors } from '../../store/ducks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { StyledContainer } from '../../ui/StyledContainer';
import { EditableForm } from '../../ui/EditableForm';
import { timeFromNow } from '../../utils/utils';
import { css } from 'styled-components';

const Comment: FC<IComment> = ({ body, created, id }) => {
  const dispatch = useAppDispatch();

  const [isEditedMode, setEditMode] = useState(false);

  const handleActiveEditMode = () => {
    setEditMode(true);
  };

  const handleOffEditMode = () => {
    setEditMode(false);
  };

  const handleUpdateComment = (values: string) => {
    dispatch(actions.comment.updateCommentRequest({ id, body: values }));
  };

  const handleDeleteComment = () => {
    dispatch(actions.comment.deleteCommentRequest(id));
  };

  const { name } = useAppSelector(selectors.user.selectUser);
  return (
    <>
      <TouchableOpacity onLongPress={handleActiveEditMode}>
        <Row containerStyled={rowStyle}>
          <StyledContainer containerStyled={'margin-right: 12px;'}>
            <Avatar big />
          </StyledContainer>
          <View>
            <Row>
              <StyledContainer containerStyled={'margin-right: 6px;'}>
                <AppText bold>{name}</AppText>
              </StyledContainer>
              <AppText fs={13} color={colors.ligthGray}>
                {timeFromNow(created)}
              </AppText>
            </Row>
            <AppText>{body}</AppText>
          </View>
        </Row>
      </TouchableOpacity>
      <EditableForm
        visible={isEditedMode}
        value={body}
        onSave={handleUpdateComment}
        onCancel={handleOffEditMode}
        onDeleted={handleDeleteComment}
      />
    </>
  );
};

const rowStyle = css`
  padding:17px 0;
  border-top-color:#E5E5E5;
  border-top-width: 1px;
  border-style: solid;
`

export default Comment;
