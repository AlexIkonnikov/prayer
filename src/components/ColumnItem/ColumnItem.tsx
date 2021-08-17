import React, { FC, Dispatch, SetStateAction } from "react";
import { actions } from "../../store/ducks";
import { IColumn } from "../../store/ducks/column";
import { useAppDispatch } from "../../store/hooks";
import { Card } from "../../ui/Card";
import { EditableColumn } from "../EditableColumn";

interface ColumnItemProps {
    column: IColumn
    editColumnId: number
    setEditColumnId: Dispatch<SetStateAction<number>>
    onPress: (name: string, id: number) => void
}

const ColumnItem: FC<ColumnItemProps> = ({ column, editColumnId, setEditColumnId, onPress }) => {
    const dispatch = useAppDispatch();
    const onPressHandler = () => {
        onPress(column.title, column.id);
    };

    const activeEditMode = () => {
        setEditColumnId(column.id);
    };

    const offEditMode = () => {
        setEditColumnId(-1);
    };

    const updateColumn = (column: IColumn) => {
        dispatch(actions.column.updateColumnRequest(column));
    };

    const deleteColumn = () => {
        dispatch(actions.column.deletColumnRequest(column.id));
    };

    if (editColumnId === column.id) {
        return <EditableColumn column={column} updateResource={updateColumn} deleteResource={deleteColumn} cancel={offEditMode}/>
    }
    return (
        <Card name={column.title} onPress={onPressHandler} onLongPress={activeEditMode} />
    );
};

export default ColumnItem;