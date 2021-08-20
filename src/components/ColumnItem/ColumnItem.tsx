import React, { FC, Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { actions } from "../../store/ducks";
import { IColumn } from "../../store/ducks/column";
import { useAppDispatch } from "../../store/hooks";
import { Card } from "../../ui/Card";
import { EditableForm } from "../../ui/EditableForm";

interface ColumnItemProps {
    column: IColumn
    onPress: (name: string, id: number) => void
}

const ColumnItem: FC<ColumnItemProps> = ({ column, onPress }) => {
    const dispatch = useAppDispatch();
    const [editMode, setEditMode] = useState(false);

    const onPressHandler = () => {
        onPress(column.title, column.id);
    };

    const activeEditMode = () => {
        setEditMode(true)
    };

    const offEditMode = () => {
        setEditMode(false)
    };

    const updateColumn = (title: string) => {
        dispatch(actions.column.updateColumnRequest({...column, title}));
    };

    const deleteColumn = () => {
        dispatch(actions.column.deletColumnRequest(column.id));
    };

    return (
        <>
            <Card name={column.title} onPress={onPressHandler} onLongPress={activeEditMode} />
            <EditableForm
                value={column.title}
                visible={editMode}
                save={updateColumn}
                cancel={offEditMode}
                deleted={deleteColumn}
            />
        </>
    )
};

export default ColumnItem;