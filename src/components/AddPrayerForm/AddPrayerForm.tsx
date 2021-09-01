import {FormApi} from 'final-form';
import React, {FC} from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import styled from 'styled-components/native';
import {actions, selectors} from '../../store/ducks';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {colors} from '../../styles/colors';
import {IconButton} from '../../ui/IconButton';
import {PlusIcon} from '../../ui/icons/PlusIcon';
import {Input} from '../../ui/Input';
import {Loader} from '../../ui/Loader';

interface AddPrayerFormProps {
  columnId: number;
}

const AddPrayerForm: FC<AddPrayerFormProps> = ({columnId}) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectors.prayer.selectDataUpdateStatus);
  const handleCreatePrayer = (values: FormProps, form: FormApi<FormProps>) => {
    dispatch(
      actions.prayer.addPrayerToColumnRequest({
        columnId: columnId,
        title: values.title,
        description: '',
        checked: false,
      }),
    );
    form.reset();
  };
  const isLoaderShow = status === 'Deleted' || status === 'Created';
  return (
    <Form
      onSubmit={handleCreatePrayer}
      initialValues={{title: ''}}
      render={({handleSubmit, pristine}) => {
        return (
          <FormWrapper>
            {isLoaderShow ? (
              <Loader size="small" />
            ) : (
              <IconButton
                onPress={handleSubmit}
                disabled={pristine}
                render={() => <PlusIcon width={22} color={colors.blue} />}
              />
            )}
            <Field
              name="title"
              render={({input}) => {
                return (
                  <Input
                    placeholder="Add a prayer..."
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
  padding-left: 14px;
  height: 50px;
  border-color: ${colors.lightGraySecond};
  width: 100%;

  border-width: 1px;
  border-radius: 10px;
  margin-top: 15px;
  margin-bottom: 34px;
`;

export default AddPrayerForm;
