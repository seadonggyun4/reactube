// 라우터 연결
import {RouterProvider} from "react-router-dom";
import router from 'routes/routes'
// 리코일 연결
import { RecoilRoot } from "recoil"; 
// 리액트 쿼리 연결
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


export default function App() {
    const queryClient = new QueryClient();

    return (
      <RecoilRoot >
          <QueryClientProvider client={queryClient}>
              <RouterProvider router={router}/>
          </QueryClientProvider>
      </RecoilRoot>
    );
}