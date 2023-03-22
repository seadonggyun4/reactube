import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {YoutubeStore} from "context/YoutubeContext";
import {GlobalComponent} from "context/componentContext";

export default function RelatedVideos({id}){
    const { VideoCard } = GlobalComponent()
    const navigate = useNavigate()
    const { youtube } = YoutubeStore()



    const {
        isLoading,
        error,
        data: realatedVideo
    } = useQuery(['realatedVideo'], async () => {
            console.log('realatedVideo 패치.....')
            return  await youtube.relatedVideo(id)
        },{staleTime: 1000 * 60 * 5}
    )




    // 비디오 card 클릭시 이벤트
    const clickVideoCard = (video) => {
        navigate(`/videos/watch/${video.id}`, { state: {video} })
    }

    console.log("✨REALATED VIDEOS✨")

    return(
        <aside className="relatedVideoList">
            {isLoading && <p>Loading...</p>}
            {error && <p>Somting is Wrong</p>}
            {realatedVideo && <ul>
                {realatedVideo.map(video =>
                    <VideoCard  video={video}  key={video.id} type="list" onClick={() => {
                        clickVideoCard(video)
                    }}/>
                )}
            </ul>}
        </aside>
    )
}