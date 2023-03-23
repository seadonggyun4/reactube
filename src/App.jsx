import {RouterProvider} from "react-router-dom";
import router from 'routes/routes' // 라우터 연결
import { RecoilRoot } from "recoil"; // 리코일 연결
import {ComponentProvider} from "context/componentContext";

export default function App() {

  return (
      <RecoilRoot >
          <ComponentProvider>
              <RouterProvider router={router}/>
          </ComponentProvider>
      </RecoilRoot>
);
}