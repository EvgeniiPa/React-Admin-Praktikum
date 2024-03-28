import {
  ArrayField,
  DateField,
  NumberField,
  SimpleShowLayout,
  TextField,
  ImageField,
  Show,
} from "react-admin";

export const GetAuto = () => (
  <Show>
    <SimpleShowLayout>
      <TextField sourse="name" />
      <ArrayField source="images">
        <ImageField source="images[0].pathS3" />
        <ImageField source="images[1].pathS3" />
        <ImageField source="images[2].pathS3" />
        <ImageField source="images[3].pathS3" />
        <ImageField source="images[4].pathS3" />
      </ArrayField>
      <TextField source="id" />
      <NumberField source="year" />
      <NumberField source="mileage" />
      <TextField source="price.currency.name" />
      <TextField source="location.city" />
      <DateField source="firstRegDate" />
      <DateField source="fuelType" />
      <DateField source="transmissionType" />
      <NumberField source="enginePower" />
      <DateField source="driveType" />
    </SimpleShowLayout>
  </Show>
);

