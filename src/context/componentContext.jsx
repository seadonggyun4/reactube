import {createContext, useContext} from "react";
// component
import CommonComponent from "component/common";
import ElememtComponent from "component/element"
import LayoutComponent from 'layout'

// react-icons
import {MdModeNight, MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import {BsSearch, BsFillSunFill} from 'react-icons/bs'

// svg
import {ReactComponent as LogoIcon} from "assets/image/youtube-icon.svg"
// =====================================================================================================================



// ComponentContext 생성
export const ComponentContext = createContext()


// CommonProvider 생성
export function ComponentProvider({children}){
    const globalComponent = {
        ...CommonComponent,
        ...ElememtComponent,
        ...LayoutComponent,
        MdModeNight,
        MdOutlineArrowDropDown,
        MdOutlineArrowDropUp,
        BsSearch,
        BsFillSunFill,
        LogoIcon
    }


    return(
        <ComponentContext.Provider value={globalComponent}>
            {children}
        </ComponentContext.Provider>
    )
}

// ComponentStore생성
export function GlobalComponent(){
    return useContext(ComponentContext);
}