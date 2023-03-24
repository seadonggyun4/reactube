import {useRecoilState, useRecoilValue} from "recoil";
import {commonStore, darkModeInfo, searchBarInfo} from "store/commonStore";
import {SET_NOT} from "Boiler/object-Boiler";
import {GlobalComponent} from "context/componentContext";

export default function ButtonBar () {
    const { Button } = GlobalComponent()
    const [ isCommon, setIsCommon ] = useRecoilState(commonStore)
    const { searchBar } = isCommon
    const darkModeInfoValue = useRecoilValue(darkModeInfo);
    const searchBarInfoValue = useRecoilValue(searchBarInfo);

    const clickNotAction = (value) => {
        setIsCommon(() => {
            return  SET_NOT(isCommon, value)
        })
    }

    console.log("✨BUTTON BAR✨")


    return(
        <article className='flex justify-center mt-10 relative'>
            <Button className={searchBar ? 'invisible mb-3 opacity-0' : 'visible mb-3 '} onClick={() => {clickNotAction('searchBar')}}>
                검색창 다시 보이기 😁
            </Button>
            <div className="absolute right-5 bottom-0 flex column flex-col items-start justify-center gap-3 p-3 h-100% bg-white rounded text-primary font-bold shadow-md">
                <span>{darkModeInfoValue}</span>
                <span>{searchBarInfoValue}</span>
            </div>
        </article>
    )
}