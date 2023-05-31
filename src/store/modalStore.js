import { atom, selector } from "recoil";


// 데이터 틀
const DATA = {
    cardDetail: false
};



export const modalStore = atom({
    key: 'modalStore',
    default: DATA
})


//  [ selector ] ==============================================================================================================

export const modalState = selector({
    key: 'modalState',
    get: ({get}) => {
        let state = false
        const AtomValue = get(modalStore)
        const AtomValueKey = Object.keys(AtomValue)

        AtomValueKey.map(item => {
            if(AtomValue[item]){
                state = true
            }
        })



        return state
    }
})