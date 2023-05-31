import {useState, useRef, useEffect} from "react";
import { formatAgo } from "util/date";
import { useRecoilState } from "recoil";
import {modalStore} from "store/modalStore";
import {commonStore} from "store/commonStore";
import {SET_NOT} from "Boiler/object-Boiler";


const VideoCard = ({video, type, id, onClick}) => {
    const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
    const isList = type === 'list'
    const [count, setCount ] = useState(0)
    const intervalFunc = useRef(null)
    const [ isModal, setIsModal ] = useRecoilState(modalStore)
    const [ isCommon, setIsCommon ] = useRecoilState(commonStore)


    console.log("✨VideoCard✨")


    useEffect( () => {
       async function checkCount(){
            // count 횟수 체킹
            if(count >= 3){
                await clearInterval(intervalFunc.current)
                await setIsModal(() => {
                    return  SET_NOT(isModal, 'cardDetail')
                })
                await setIsCommon(()=>{
                    return  {
                        ...isCommon,
                        videoId: id
                    }
                })
            }
        }
        checkCount()
    }, [count])

    // card 마우스오버
    const mouseOver = () =>{
        intervalFunc.current = setInterval(()=> {
            setCount((prev) => prev + 1 )
        }, 1000)
    }

    // card 마우스아웃
    const mouseOut = () => {
        clearInterval(intervalFunc.current)
        setCount( 0 )
    }



    return(
        <li onClick={onClick} className='cursor-pointer' onMouseOver={mouseOver} onMouseOut={mouseOut}>
            <article className={isList ? 'flex gap-1 m-2' : ''} >
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

export default VideoCard