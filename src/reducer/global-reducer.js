export default function GlobalReducer(state, action){
    switch (action.type) {
        // 데이터 NOT 연산자
        case 'SET_NOT': {

            const {target} =  action

            const returnData = {
                ...state
            }

            returnData[target] = !returnData[target]

            return returnData
        }
    }
}