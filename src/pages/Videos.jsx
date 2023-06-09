import {useNavigate, useParams} from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import GlobalComponents from 'GlobalComponents'
import youtubeAction from "action/youtubeAction";


export default function Videos(){
    const {VideoCard} = GlobalComponents
    const navigate = useNavigate()
    const client = useQueryClient()
    const { keyword } = useParams()

    console.log("✨Videos✨")


    const {
        isLoading,
        error,
        data: videos
    } = useQuery(['videos', keyword], async () => {
            console.log('videos 패치.....')
            return  await youtubeAction.search(keyword)

        },{staleTime:  1000 * 60 * 1}
    )

    // 비디오 card 클릭시 이벤트
    const clickVideoCard = (video) => {
        navigate(`/videos/watch/${video.id}`, { state: {video} })
        client.invalidateQueries(['channels']) // channels 쿼리 초기화
    }


    return (
        <section>
            {isLoading && <p>Loading...</p>}
            {error && <p>Somting is Wrong</p>}
            {videos && <ul className="videoList">
                {videos.map(video =>
                    <VideoCard  video={video} id={video.id}  key={video.id} onClick={() => {
                        clickVideoCard(video)
                    }}/>
                )}
            </ul>}
        </section>
    );
}
