import {GlobalComponent} from "context/componentContext";
import { useRecoilState } from "recoil";
import { commonStore } from "store/commonStore";
import { SET_NOT } from "Boiler/object-Boiler";

export default function Header(){
    const {
        Logo,
        SearchBar,
        MdModeNight,
        MdOutlineArrowDropDown,
        MdOutlineArrowDropUp,
        BsFillSunFill
    } = GlobalComponent()
    const [ isCommon, setIsCommon ] = useRecoilState(commonStore)
    const { darkmode, searchBar } = isCommon


    const clickNotAction = (value) => {
        setIsCommon(() => {
            return  SET_NOT(isCommon, value)
        })
    }



    console.log("✨HEADER✨")

    return (
        <>
            {/*show Header*/}
            <header className={searchBar ? 'searchHeaderShow' : 'searchHeaderHide'}>
                <Logo/>
                <SearchBar />
                <button className="bg-primary mx-3 p-3 rounded-full transition hover:bg-blue-500" onClick={() => {clickNotAction('darkmode')}}>
                    {darkmode ? <BsFillSunFill /> :  <MdModeNight />}
                </button>
                <button className="bg-primary mx-3 p-3 rounded-full transition hover:bg-blue-500" onClick={() => {clickNotAction('searchBar')}}>
                    {searchBar ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                </button>
            </header>
            {/*hide Header*/}
            <header className={searchBar ? 'invisible mb-3 opacity-0' : 'visible mb-3 flex justify-center opacity-100'}>
                <button className="bg-primary mx-3 p-3 rounded transition hover:bg-blue-500" onClick={() => {clickNotAction('searchBar')}}>
                    검색창 다시 보이기 😁
                </button>
            </header>
        </>
    )
}