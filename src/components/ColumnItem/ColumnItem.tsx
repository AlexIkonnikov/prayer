import React, {FC} from 'react';
import {useState} from 'react';
import {actions} from '../../store/ducks';
import {IColumn} from '../../store/column';
import {useAppDispatch} from '../../store/hooks';
import {Card} from '../../ui/Card';
import {EditableForm} from '../../ui/EditableForm';

interface ColumnItemProps {
  column: IColumn;
  onNext: (name: string, id: number) => void;
}

const ColumnItem: FC<ColumnItemProps> = ({column, onNext}) => {
  const dispatch = useAppDispatch();
  const [editMode, setEditMode] = useState(false);

  const handlerPressItem = () => {
    onNext(column.title, column.id);
  };

  const handleActiveEditMode = () => {
    setEditMode(true);
  };

  const handleOffEditMode = () => {
    setEditMode(false);
  };

  const handleUpdateColumn = (title: string) => {
    dispatch(actions.column.updateColumnRequest({...column, title}));
  };

  const handleDeleteColumn = () => {
    dispatch(actions.column.deleteColumnRequest(column.id));
  };

  return (
    <>
      <Card
        name={column.title}
        onPress={handlerPressItem}
        onLongPress={handleActiveEditMode}
      />
      <EditableForm
        value={column.title}
        visible={editMode}
        onSave={handleUpdateColumn}
        onCancel={handleOffEditMode}
        onDeleted={handleDeleteColumn}
      />
    </>
  );
};

export default ColumnItem;
