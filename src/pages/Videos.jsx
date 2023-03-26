import {useNavigate, useParams} from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import GlobalComponents from 'GlobalComponents'
import youtubeAction from "action/youtubeAction";

// import {useMemo} from "react";
// import { useRecoilState } from "recoil";
// import { YoutubeStore } from "store/youtubeStore";


export default function Videos(){
    const {VideoCard} = GlobalComponents
    const navigate = useNavigate()
    const client = useQueryClient()
    const { keyword } = useParams()
    // const [ isYoutube, setIsYoutube ] = useRecoilState(YoutubeStore)


    const {
        isLoading,
        error,
        data: videos
    } = useQuery(['videos', keyword], async () => {
            console.log('videos 패치.....')
            return  await youtubeAction.search(keyword)

        },{staleTime: 1000 * 60 * 1}
    )

    // 비디오 card 클릭시 이벤트
    const clickVideoCard = (video) => {
        navigate(`/videos/watch/${video.id}`, { state: {video} })
        client.invalidateQueries(['channels']) // channels 쿼리 초기화
    }

    // useMemo(() => {
    //     console.log('실행')
    //     if(videos){
    //         if(videos[0]?.id !== isYoutube[0]?.id){
    //             setIsYoutube([...videos])
    //             console.log('다름')
    //         } else if (videos[0]?.id === isYoutube[0]?.id){
    //             console.log('같음')
    //         }
    //     }
    // }, [videos]);



    return (
        <section>
            {isLoading && <p>Loading...</p>}
            {error && <p>Somting is Wrong</p>}
            {videos && <ul className="videoList">
                {videos.map(video =>
                    <VideoCard  video={video}  key={video.id} onClick={() => {
                        clickVideoCard(video)
                    }}/>
                )}
            </ul>}
        </section>
    );
}
