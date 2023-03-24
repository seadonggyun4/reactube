import { atom, selector } from "recoil";


export const commonStore = atom({
    key: 'commonStore',
    default: {
        darkmode: true,
        searchBar: true
    }
})

//  [ selector ] ==============================================================================================================

export const darkModeInfo = selector({
    key: 'darkModeInfo',
    get: ({get}) => {
        const AtomValue = get(commonStore)
        const {darkmode} = AtomValue
        return `다크모드 : ${darkmode}`
    }
})

export const searchBarInfo = selector({
    key: 'searchBarInfo',
    get: ({get}) => {
        const AtomValue = get(commonStore)
        const {searchBar} = AtomValue
        return `헤더 검색창 : ${searchBar}`
    }
})


