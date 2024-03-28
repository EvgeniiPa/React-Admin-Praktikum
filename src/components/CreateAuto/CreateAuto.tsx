import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

export const CreateAuto = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="Name" />
        <NumberInput source="Year" />
        <TextInput source="Engine power" />
        <TextInput source="literEngineVolume" />
      </SimpleForm>
    </Create>
  );
};
