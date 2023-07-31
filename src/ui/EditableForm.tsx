import React, {FC} from 'react';
import {Field, Form, FormProps} from 'react-final-form';
import {ModalProps, View} from 'react-native';
import {AppModal} from './AppModal';
import {GroupeButton} from './GroupeButton';
import {InputField} from './InputField';

interface EditableFormProps extends ModalProps {
  value: string;
  onSave: (value: string) => void;
  onCancel: () => void;
  onDeleted: () => void;
}

export const EditableForm: FC<EditableFormProps> = ({
  value,
  onSave,
  onCancel,
  onDeleted,
  ...outerProps
}) => {
  const handleSave = ({text}: FormProps) => {
    onSave(text);
    onCancel();
  };

  return (
    <AppModal {...outerProps}>
      <Form
        onSubmit={handleSave}
        initialValues={{text: value}}
        render={({handleSubmit}) => {
          return (
            <View>
              <Field name="text" component={InputField} />
              <GroupeButton
                onSave={handleSubmit}
                onCancel={onCancel}
                onDeleted={onDeleted}
              />
            </View>
          );
        }}
      />
    </AppModal>
  );
};
