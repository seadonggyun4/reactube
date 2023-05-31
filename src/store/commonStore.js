import { atom, selector } from "recoil";


// 데이터 틀
const DATA = {
    darkmode: true,
    searchBar: true,
    videoId: '',
};



export const commonStore = atom({
    key: 'commonStore',
    default: DATA
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


