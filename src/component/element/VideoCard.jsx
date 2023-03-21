import { formatAgo } from "util/date";

export default function VideoCard({video, type, onClick}){
    const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
    const isList = type === 'list'

    return(
        <li onClick={onClick} className='cursor-pointer'>
            <article className={isList ? 'flex gap-1 m-2' : ''}>
                <img className={isList ? 'w-60 mr-2' : 'w-full'} src={thumbnails.medium.url} alt={title}/>
                <div>
                    <p className="my-2 font-semibold line-clamp-2">{title}</p>
                    <p className="mb-2 text-sm opacity-80">{channelTitle}</p>
                    <p className="text-sm opacity-80 text-primary">{formatAgo(publishedAt)}</p>
                </div>
            </article>
        </li>

    )
}