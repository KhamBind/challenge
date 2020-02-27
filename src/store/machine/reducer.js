import * as types from "./actionTypes";

const initialState = {
    type: types.NONE,
    status: types.NONE,
    error: null,
    machines: [],
    machine: null
}

export default function common(state=initialState, action={}) {
    switch (action.type) {
        case types.GET_MACHINES:
            return {
                ...state,
                type: types.GET_MACHINES,
                status: action.status?action.status:state.status,
                machines: action.result === undefined? []: action.result.data,
                error: action.error,
            }
        case types.GET_MACHINE:
            return {
                ...state,
                type: types.GET_MACHINE,
                status: action.status?action.status:state.status,
                machine: action.result === undefined? null: action.result.data,
                error: action.error,
            }
        default:
            return state;
    }
}