import React, {FC, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {colors} from '../../styles/colors';
import {AppText} from '../../ui/AppText';
import {Avatar} from '../../ui/Avatar';
import {Row} from '../../ui/Row';
import {IComment} from '../../store/comment/types';
import {actions, selectors} from '../../store/ducks';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {EditableForm} from '../../ui/EditableForm';
import {timeFromNow} from '../../utils/utils';
import {css} from 'styled-components';
import styled from 'styled-components/native';

const Comment: FC<IComment> = ({body, created, id}) => {
  const dispatch = useAppDispatch();
  const {name} = useAppSelector(selectors.user.selectUser);

  const [isEditedMode, setEditMode] = useState(false);

  const handleActiveEditMode = () => {
    setEditMode(true);
  };

  const handleOffEditMode = () => {
    setEditMode(false);
  };

  const handleUpdateComment = (values: string) => {
    dispatch(actions.comment.updateCommentRequest({id, body: values}));
  };

  const handleDeleteComment = () => {
    dispatch(actions.comment.deleteCommentRequest(id));
  };
  return (
    <>
      <TouchableOpacity onLongPress={handleActiveEditMode}>
        <Row containerStyled={rowStyle}>
          <AvatarWrapper>
            <Avatar isBig={true} />
          </AvatarWrapper>
          <View>
            <Row>
              <TextWrapper>
                <AppText containerStyled={textBold}>{name}</AppText>
              </TextWrapper>
              <AppText containerStyled={textStyle}>
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

const TextWrapper = styled.View`
  margin-right: 6px;
`;

const AvatarWrapper = styled.View`
  margin-right: 12px;
`;

const rowStyle = css`
  padding: 17px 0;
  border-top-color: ${colors.lightGraySecond};
  border-top-width: 1px;
  border-style: solid;
`;
const textStyle = css`
  font-size: 13px;
  color: ${colors.lightGray};
`;
const textBold = css`
  font-weight: bold;
`;

export default Comment;
