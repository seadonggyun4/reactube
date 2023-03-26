// component
import CommonComponent from "component/common";
import ElememtComponent from "component/element"
import LayoutComponent from 'layout'
import PagesComponent from "pages";

// react-icons
import {MdModeNight, MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import {BsSearch, BsFillSunFill} from 'react-icons/bs'

// svg
import {ReactComponent as LogoIcon} from "assets/image/youtube-icon.svg"
// =====================================================================================================================


const GlobalComponents = {
    ...CommonComponent,
    ...ElememtComponent,
    ...LayoutComponent,
    ...PagesComponent,
    MdModeNight,
    MdOutlineArrowDropDown,
    MdOutlineArrowDropUp,
    BsSearch,
    BsFillSunFill,
    LogoIcon
}

export default GlobalComponents