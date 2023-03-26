import GlobalComponents from 'GlobalComponents'
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
        BsFillSunFill,
        Button,
    } = GlobalComponents
    const [ isCommon, setIsCommon ] = useRecoilState(commonStore)
    const { darkmode, searchBar } = isCommon

    const clickNotAction = (value) => {
        setIsCommon(() => {
            return  SET_NOT(isCommon, value)
        })
    }

    const checkSearchBar = () =>{
        return searchBar ? 'searchHeaderShow' : 'searchHeaderHide'
    }
    const checkDarkmode = () =>{
        return darkmode ? '' : 'searchHeaderLight'
    }



    console.log("✨HEADER✨")

    return (
        <header className={`${checkSearchBar()} ${checkDarkmode()}`}>
            <Logo/>
            <SearchBar />
            <Button type="circle" onClick={() => {clickNotAction('darkmode')}}>
                {darkmode ? <BsFillSunFill /> :  <MdModeNight />}
            </Button>
            <Button type="circle" onClick={() => {clickNotAction('searchBar')}}>
                {searchBar ? <MdOutlineArrowDropUp /> : <MdOutlineArrowDropDown />}
            </Button>
        </header>
    )
}