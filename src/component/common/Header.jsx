import {GlobalComponent} from "context/componentContext";
import { useRecoilState } from "recoil";
import { commonDATA } from "store/commonStore";


export default function Header(){
    const {
        Logo,
        SearchBar,
        MdModeNight,
        MdOutlineArrowDropDown,
        MdOutlineArrowDropUp,
        BsFillSunFill
    } = GlobalComponent()
    const [ common, setCommon ] = useRecoilState(commonDATA)
    const { darkmode, searchBar } = common


    const clickNotAction = (value) => {
        setCommon(() => {
            const returnData = {
                ...common
            }

            returnData[value] = !returnData[value]

            return returnData
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
                    {darkmode ? <MdModeNight /> : <BsFillSunFill />}
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