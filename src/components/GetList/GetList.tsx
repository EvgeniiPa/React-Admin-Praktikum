import { List, Datagrid, TextField, DeleteButton, EditButton } from "react-admin";

export const GetList = () => {
  return (
    <List>
      <Datagrid rowClick="show">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="year" />
        <TextField source="firstRegDate" />
        <TextField source="enginePower" />
        <TextField source="literEngineVolume" />
        <EditButton/>
        <DeleteButton/>
      </Datagrid>
    </List>
  );
};
