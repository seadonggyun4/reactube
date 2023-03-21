import {RouterProvider} from "react-router-dom";
import router from 'routes/routes' // 라우터 연결
import {CommonProvider} from "context/commonContext";
import {ComponentProvider} from "context/componentContext";

export default function App() {

  return (
      <ComponentProvider>
          <CommonProvider>
              <RouterProvider router={router}/>
          </CommonProvider>
      </ComponentProvider>
);
}