import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { selectors } from '../../store/ducks';
import { useAppSelector } from '../../store/hooks';
import { colors } from '../../styles/colors';
import { IconButton } from '../../ui/IconButton';
import { PlusIcon } from '../../ui/icons/PlusIcon';
import { Input } from '../../ui/Input';
import { Loader } from '../../ui/Loader';
import { StyledContainer } from '../../ui/StyledContainer';

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
            <StyledContainer
              containerStyled={'flex-grow: 1; align-items: center;'}>
              <Field
                name="text"
                render={({ input }) => {
                  return (
                    <Input
                      bold
                      value={input.value}
                      onChangeText={input.onChange}
                    />
                  );
                }}
              />
            </StyledContainer>
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

export default AddColumnForm;
