import { FormApi } from 'final-form';
import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { actions, selectors } from '../../store/ducks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Input } from '../../ui/Input';
import { MessageIcon } from '../../ui/icons/MessageIcon';
import { Loader } from '../../ui/Loader';
import { IconButton } from '../../ui/IconButton';
import styled from 'styled-components/native';

interface AddCommentPayloadProps {
  prayerId: number;
}

const AddCommentForm: FC<AddCommentPayloadProps> = ({ prayerId }) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectors.comment.selectDataUpdateStatus);
  const handlerSubmit = ({ body }: FormProps, form: FormApi<FormProps>) => {
    dispatch(actions.comment.addCommentRequest({ id: prayerId, body }));
    form.reset();
  };

  return (
    <Form
      onSubmit={handlerSubmit}
      render={({ handleSubmit, pristine }) => {
        return (
          <FormWrapper>
            {status === 'inProcess' ? (
              <Loader size="small" />
            ) : (
              <IconButton disabled={pristine} onPress={handleSubmit} render={() => <MessageIcon />} />
            )}
            <Field
              name="body"
              render={({ input }) => {
                return (
                  <Input
                    placeholder="Add a comment..."
                    value={input.value}
                    onChangeText={input.onChange}
                  />
                );
              }}
            />
          </FormWrapper>
        );
      }}
    />
  );
};

const FormWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  border-color: #E5E5E5;
  width: 100%;
  padding-left: 14px;
  
  border-top-width: 1px;
  
`

export default AddCommentForm;
