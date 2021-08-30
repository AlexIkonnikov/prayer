import {FormApi} from 'final-form';
import React, {FC} from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {actions, selectors} from '../../store/ducks';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {colors} from '../../styles/colors';
import { IconButton } from '../../ui/IconButton';
import {PlusIcon} from '../../ui/icons/PlusIcon';
import {Input} from '../../ui/Input';
import {Loader} from '../../ui/Loader';
import {StyledContainer} from '../../ui/StyledContainer';

interface AddPrayerFormProps {
  columnId: number
}

const AddPrayerForm: FC<AddPrayerFormProps> = ({columnId}) => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectors.prayer.selectDataUpdateStatus);
  const createPrayer = (values: FormProps, form: FormApi<FormProps>) => {
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

  return (
    <Form
      onSubmit={createPrayer}
      initialValues={{title: ''}}
      render={({handleSubmit}) => {
        return (
          <StyledContainer
            containerStyled={`
                        padding-left: 14px;
                        height: 50px;
                        border-width: 1px;
                        border-color: #E5E5E5;
                        border-radius: 10px;
                        width: 100%;
                        margin-top: 15px;
                        margin-bottom: 34px;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    `}>
            {status === 'inProcess' ? (
              <Loader size="small" />
            ) : (
              <IconButton onPress={handleSubmit} render={() => <PlusIcon width={22} color={colors.blue} />} />
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
          </StyledContainer>
        );
      }}
    />
  );
};

export default AddPrayerForm;
