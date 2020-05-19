import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from './types'

export const productQuantity = (action, name) => {
    return (dispatch) => {
        console.log("Inside Product Quantity");
        console.log("the action is:", action);
        console.log("the name is:", name);

        dispatch({
            //jesli typ akcji to increase to wysyłam INCREASE_QUANTITY do reducera
            type: action === 'increase' ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}

export const clearProduct = (name) => {
    return (dispatch) => {
        console.log("Inside clear product", name);

        dispatch({
            type: CLEAR_PRODUCT,
            payload: name
        })

    }
}