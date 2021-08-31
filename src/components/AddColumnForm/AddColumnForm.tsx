import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import styled, { css } from 'styled-components/native';
import { selectors } from '../../store/ducks';
import { useAppSelector } from '../../store/hooks';
import { colors } from '../../styles/colors';
import { IconButton } from '../../ui/IconButton';
import { PlusIcon } from '../../ui/icons/PlusIcon';
import { Input } from '../../ui/Input';
import { Loader } from '../../ui/Loader';

interface AddColumnFormProps {
  onSubmit: (text: string) => void;
  inputText: string;
}

const AddColumnForm: FC<AddColumnFormProps> = ({ inputText, onSubmit }) => {
  const dataUpdateStatus = useAppSelector(
    selectors.column.selectDataUpdateStatus,
  );

  const handleSubmit = (values: FormProps) => {
    onSubmit(values.text);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{ text: inputText }}
      render={({ handleSubmit, values }) => {
        return (
          <>
            <FieldContainer>
              <Field
                name="text"
                render={({ input }) => {
                  return (
                    <Input
                      containerStyled={inputStyle}
                      value={input.value}
                      onChangeText={input.onChange}
                    />
                  );
                }}
              />
            </FieldContainer>
            {dataUpdateStatus === 'inProcess' ? (
              <Loader size="small" />
            ) : (
              <IconButton onPress={handleSubmit} disabled={!values.text} render={() => <PlusIcon color={colors.blue} />} />
            )}
          </>
        );
      }}
    />
  );
};

const inputStyle = css`font-weight: bold;`

const FieldContainer = styled.View`
  flex-grow: 1; 
  align-items: center;
`

export default AddColumnForm;
