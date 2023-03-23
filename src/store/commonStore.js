import { atom } from "recoil";


export const commonStore = atom({
    key: 'commonStore',
    default: {
        darkmode: true,
        searchBar: true
    }
})