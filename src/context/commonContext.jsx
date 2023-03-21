import {createContext, useContext, useReducer } from "react";
import GlobalReducer from 'reducer/global-reducer'
// import { useImmer } from "use-immer";

// CommonProvider 생성
export const CommonContext = createContext()

// CommonProvider 생성
export function CommonProvider({children}){
    const commonData = {
        darkmode: true,
        searchBar: true,
    }
    const [common, dispatchCommon] = useReducer(GlobalReducer, commonData);

    // const [common, updateCommon] = useImmer(commonData);
    //
    //
    // const SET_NOT = (targetdata) => {
    //     updateCommon((common) => {
    //         common[targetdata] = !common[targetdata]
    //     })
    // }

    return(
        <CommonContext.Provider value={{common, dispatchCommon}}>
            {children}
        </CommonContext.Provider>
    )
}

// CommonStore생성
export function CommonStore(){
    return useContext(CommonContext);
}