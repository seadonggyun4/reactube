import {useRecoilState} from "recoil";
import {modalStore} from "store/modalStore";
import {SET_NOT} from "Boiler/object-Boiler";

export default function Modal({modal, content}){
    const [ isModal, setIsModal ] = useRecoilState(modalStore)

    // 모달창 닫기
    const closeModal = () => {
        setIsModal(() => {
            return  SET_NOT(isModal, modal)
        })
    }


    return(
        <article className="absolute flex flex-col  top-1/2 left-1/2   transform -translate-y-1/2 -translate-x-1/2 w-3/6 h-3/6 bg-white rounded overflow-hidden">
            <div className="flex-1 flex p-5">
                {content}
            </div>
            <div className="flex-2 flex justify-center items-center py-3">
                <button className="px-20 py-1 bg-primary text-white rounded transition hover:bg-amber-600" onClick={closeModal}>닫기</button>
            </div>
        </article>
    )
}