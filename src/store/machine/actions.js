import * as types from './actionTypes';

import axios from 'axios'

function getMachinesAPI() {
    return axios.get(`http://localhost:8080/machines`)
}

function getMachineAPI(machineid) {
    return axios.get(`http://localhost:8080/machines/` + machineid)
}

function putMachineAPI(machineid, name) {
    return axios.put('http://localhost:8080/machines/' + machineid, 
        {
            name: name
        }
        // { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    )
}
export function getMachines() {
    return dispatch=>{
        dispatch({type:types.LOADING});
        return getMachinesAPI().then(
            (response) => {
                dispatch({
                    type:types.GET_MACHINES,
                    status:types.SUCCESS,
                    error:null,
                    result:response
                })
            }
        ).catch(error => {
            dispatch({
                type:types.GET_MACHINES,
                status:types.FAILED,
            })
        })
    }
}

export function getMachine(machineid) {
    return dispatch=>{
        dispatch({type:types.LOADING});
        return getMachineAPI(machineid).then(
            (response) => {
                dispatch({
                    type:types.GET_MACHINE,
                    status:types.SUCCESS,
                    error:null,
                    result:response
                })
            }
        ).catch(error => {
            dispatch({
                type:types.GET_MACHINE,
                status:types.FAILED,
            })
        })
    }
}

export function putMachine(machineid, name) {
    return dispatch=>{
        dispatch({type:types.LOADING});
        return putMachineAPI(machineid, name).then(
            (response) => {
                dispatch({
                    type:types.PUT_MACHINE,
                    status:types.SUCCESS,
                    error:null,
                    result:Response
                })
            }
        ).catch(error => {
            dispatch({
                type:types.PUT_MACHINE,
                status:types.FAILED
            })
        })
    }
}