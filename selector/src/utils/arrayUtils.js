import { isEqual } from 'lodash';


// export const chunk = (source, size) => {
//     return Array.from({ length: Math.ceil(source.length / size) }, (v, i) =>
//         source.slice(i * size, i * size + size)
//     )
// }

export const addUniqueArrayValue = (arr, option) => {
    const uniqueArr = arr.slice();
    const uniqueArrValue = uniqueArr.findIndex((el) => isEqual(el, option));

    if (uniqueArrValue === -1) {
        uniqueArr.push(option);
    }

    return uniqueArr;
}

export const removeUniqueArrayValue = (arr, option) => {
    const uniqueArr = arr.slice();
    const uniqueArrValue = uniqueArr.findIndex((el) => isEqual(el, option));

    if (uniqueArrValue !== -1) {
        uniqueArr.splice(uniqueArrValue, 1);
    }

    return uniqueArr;
}