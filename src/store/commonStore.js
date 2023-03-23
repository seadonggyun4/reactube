import { atom } from "recoil";


export const commonDATA = atom({
    key: 'commonDATA',
    default: {
        darkmode: true,
        searchBar: true
    }
})