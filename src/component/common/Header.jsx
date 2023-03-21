import {CommonStore} from "context/commonContext";
import {GlobalComponent} from "context/componentContext";

export default function Header(){
    const {
        Logo,
        SearchBar,
        MdModeNight,
        MdOutlineArrowDropDown,
        MdOutlineArrowDropUp,
        BsFillSunFill
    } = GlobalComponent()
    const {common, dispatchCommon} = CommonStore()
    const { darkmode, searchBar}  = common

    return (
        <>
            {/*show Header*/}
            <header className={searchBar ? 'searchHeaderShow' : 'searchHeaderHide'}>
                <Logo/>
                <SearchBar />
                <button className="bg-primary mx-3 p-3 rounded-full transition hover:bg-blue-500" onClick={() => {dispatchCommon({type: 'SET_NOT', target: 'darkmode'})}}>
                    {darkmode ? <MdModeNight /> : <BsFillSunFill />}
                </button>
                <button className="bg-primary mx-3 p-3 rounded-full transition hover:bg-blue-500" onClick={() => {dispatchCommon({type: 'SET_NOT', target: 'searchBar'})}}>
                    {searchBar ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
                </button>
            </header>
            {/*hide Header*/}
            <header className={searchBar ? 'invisible mb-3 opacity-0' : 'visible mb-3 flex justify-center opacity-100'}>
                <button className="bg-primary mx-3 p-3 rounded transition hover:bg-blue-500" onClick={() => {dispatchCommon({type: 'SET_NOT', target: 'searchBar'})}}>
                    검색창 다시 보이기 😁
                </button>
            </header>
        </>
    )
}