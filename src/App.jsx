import {RouterProvider} from "react-router-dom";
import router from 'routes/routes' // 라우터 연결
import {CommonProvider} from "context/commonContext";
import {ComponentProvider} from "context/componentContext";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App() {

  return (
      <ComponentProvider>
          <CommonProvider>
              <RouterProvider router={router}/>
              {/*<ReactQueryDevtools initialIsOpen={false} />*/}
          </CommonProvider>
      </ComponentProvider>
);
}