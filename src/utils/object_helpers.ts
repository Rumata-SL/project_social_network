import {UsersType} from "../Redux/UsersReducer";

export const updateObjectInArray = (
    items: Array<UsersType>,
    itemId: number,
    objPropName: keyof UsersType,
    newObjProps: { followed: boolean }
): Array<UsersType> => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })

}