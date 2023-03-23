export const SET_NOT = (obj, value) => {
    const returnObj = {
        ...obj
    }

    returnObj[value] = !returnObj[value]

    return returnObj
}