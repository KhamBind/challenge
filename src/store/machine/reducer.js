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
        case types.PUT_MACHINE:
            let aftermachines = [];
            if (state.machines) {
                for (let i = 0; i < state.machines.length; i++) {
                    let tmp = {...state.machines[i]};
                    if (action.result && tmp.id === action.result.id) {
                        tmp.name =  action.result.name;
                        // console.log(tmp.name);
                    }
                    aftermachines.push(tmp);
                }    
            }
            return {
                ...state,
                type: types.PUT_MACHINE,
                status: action.status?action.status:state.status,
                machines: aftermachines
            }
        case types.UPDATE_MACHINE:
            let premachine =  {...state.machine};
            let premachines = [];
            if (state.machines) {
                for (let i = 0; i < state.machines.length; i++) {
                    let tmp = state.machines[i];
                    if (action.result && tmp.id === action.result.id) {
                        tmp.health =  action.result.health;
                    }
                    premachines.push(tmp);
                }    
            }

            if (premachine) {
                if (action.result && state.machine && action.result.id === state.machine.id) {
                    premachine.health = action.result.health;
                }
            }
            return {
                ...state,
                type: types.UPDATE_MACHINE,
                status: action.status?action.status:state.status,
                machine: premachine,
                machines: premachines
            }
        default:
            return state;
    }
}