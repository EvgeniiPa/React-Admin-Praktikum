import { Admin, Resource } from "react-admin";
import { GetList } from "./components/GetList/GetList";
import { GetAuto } from "./components/GitAuto/GetAuto";
import { CreateAuto } from "./components/CreateAuto/CreateAuto";
import { EditAuto } from "./components/EditAuto/EditAuto";
import { dataProvider } from "./dataProvider";

export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="autos" list={GetList} show={GetAuto} create={CreateAuto} edit={EditAuto}/>
    </Admin>
  );
};
