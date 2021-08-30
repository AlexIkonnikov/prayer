import React, {FC} from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {ModalProps, View} from 'react-native';
import {AppModal} from './AppModal';
import {GroupeButton} from './GroupeButton';
import {InputField} from './InputField';

interface EditableFormProps extends ModalProps {
  value: string;
  save: (value: string) => void;
  cancel: () => void;
  deleted: () => void;
}

export const EditableForm: FC<EditableFormProps> = ({
  value,
  save,
  cancel,
  deleted,
  ...outerProps
}) => {
  const onSubmit = ({text}: FormProps) => {
    save(text);
    cancel();
  };

  return (
    <AppModal {...outerProps}>
      <Form
        onSubmit={onSubmit}
        initialValues={{text: value}}
        render={({handleSubmit}) => {
          return (
            <View>
              <Field name="text" component={InputField} />
              <GroupeButton
                save={handleSubmit}
                cancel={cancel}
                deleted={deleted}
              />
            </View>
          );
        }}
      />
    </AppModal>
  );
};
