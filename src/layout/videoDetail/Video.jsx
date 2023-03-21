import {useQuery} from "@tanstack/react-query";
import {YoutubeStore} from "context/YoutubeContext";
import {GlobalComponent} from "context/componentContext";

export default function Video({video}){
    const { ChannelInfo } = GlobalComponent()
    const { youtube } = YoutubeStore()
    const { title, channelId, channelTitle, description } = video.snippet

    const {
        data: imgURL
    } = useQuery(['channels'], async () => {
            console.log('channels 패치.....')
            return  await youtube.channelImageURL(channelId)
        },{staleTime: 1000 * 60 * 5}
    )

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