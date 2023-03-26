import {createBrowserRouter} from "react-router-dom";
import GlobalComponents from 'GlobalComponents'
const { Root, NotFound, Videos, VideoDetail } = GlobalComponents


 const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {index: true, element: <Videos /> },
            // [ 비디오 리스트 ]
            {path: '/videos',element: <Videos />,},
            {path: '/videos/:keyword', element: <Videos />},
            // [ 비디오 정보 상세보기 ]
            {path: '/videos/watch', element: <VideoDetail />},
            {path: '/videos/watch/:videoId', element: <VideoDetail />},
            // [ 404페이지 ]
            {path: '*', element: <NotFound />},

        ]
    }
])



export default router