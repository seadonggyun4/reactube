import {createBrowserRouter} from "react-router-dom";
import Root from 'pages/Root'
import NotFound from "pages/NotFound";
import Videos from "pages/Videos";
import VideoDetail from "pages/VideoDetail";

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