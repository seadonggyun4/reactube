import globalComponents from "GlobalComponents";
import {useRecoilState, useRecoilValue} from "recoil";
import {modalStore, modalState} from "store/modalStore";
import {commonStore} from "store/commonStore";
import { useQueryClient } from "@tanstack/react-query";
import { useParams} from "react-router-dom";
import {useEffect, useState} from "react";




export default function ModalContainer(){
    const {Modal} = globalComponents
    const [ isModal, setIsModal ] = useRecoilState(modalStore)
    const [ isCommon, setIsCommon ] = useRecoilState(commonStore)
    const modalStateValue = useRecoilValue(modalState);
    const { keyword } = useParams()
    const queryClient = useQueryClient();
    const videosData = queryClient.getQueryData(['videos', keyword]);
    const [video, setVideo] = useState({})

    useEffect(()=>{
        getVideoData()
    })


    // 리액트 쿼리에 저장된 비디오 데이터 받아오기 및 세팅 함수
    function getVideoData(){
        if(videosData){
            videosData.forEach(data => {
                if(data.id === isCommon.videoId){
                    setVideo(data.snippet)
                    console.log(video)
                }
            })
        }

    }


    return(
        <>
            {modalStateValue && <section className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50  bg-opacity-60" style={{background: "rgba(94, 110, 141, 0.9)"}}>
                { isModal.cardDetail &&
                    <Modal
                        modal="cardDetail"
                        content={ video?.thumbnails?.medium?.url &&
                                <article className="flex gap-x-10 w-full">
                                    <div className="flex items-center h-full w-96">
                                        <img className="object-contain rounded" src={video.thumbnails.medium.url} alt={video.title}/>
                                    </div>
                                    <div className="w-96 py-5">
                                        <h3 className="text-3xl pb-3 truncate">{video.title}</h3>
                                        <span className="block text-primary pb-3 truncate">{video.channelTitle}</span>
                                        <p className="w-full h-60 overflow-y-scroll">
                                            {video.description}
                                        </p>
                                    </div>
                                </article>
                           }
                     />
                }
            </section>}
        </>
    )
}