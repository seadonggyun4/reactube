import {useQuery} from "@tanstack/react-query";
import GlobalComponents from 'GlobalComponents'

import youtubeAction from "action/youtubeAction";

export default function Video({video}){
    const { ChannelInfo } = GlobalComponents
    const { title, channelId, channelTitle, description } = video.snippet

    const {
        data: imgURL
    } = useQuery(['channels'], async () => {
            console.log('channels 패치.....')
            return  await youtubeAction.channelImageURL(channelId)
        },{staleTime: 1000 * 60 * 5}
    )

    console.log("✨Video✨")


    return(
        <>
            <iframe
                title="youtubeIframe"
                id='player'
                type='text/html'
                width='100%'
                height='640'
                src={`https://www.youtube.com/embed/${video.id}`}
                frameBorder='0'
            />
            <div className='p-8'>
                <h2 className="text-xl font-bold">{title}</h2>
                <ChannelInfo imgURL={imgURL} name={channelTitle}/>
                <pre className="whitespace-pre-wrap">{description}</pre>
            </div>
        </>
    )
}