import { TextInput, Edit, SimpleForm } from "react-admin";

export const EditAuto = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="year" />
        <TextInput source="firstRegDate" />
        <TextInput source="enginePower" />
        <TextInput source="literEngineVolume" />
      </SimpleForm>
    </Edit>
  );
};
