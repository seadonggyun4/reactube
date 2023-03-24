import {useLocation} from "react-router-dom";
import {GlobalComponent} from "context/componentContext";


export default function VideoDetail () {
    const {state: {video}} = useLocation()// state는 새로고침되도 남아있는거 같음???
    const {Video, RelatedVideos} = GlobalComponent()

    return (
        <section className='flex flex-col lg:flex-row'>
            <article className="basis-4/6 max-w-5xl">
                <Video video={video} />
            </article>
            <section className="basis-2/6">
                <RelatedVideos id={video.id} />
            </section>
        </section>
    )
}