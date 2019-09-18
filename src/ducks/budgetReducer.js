import axios from "axios";

//initialState
const initialState = {
    purchase: [],
    budgetLimit: null,
    loading: false
}

//constants
const REQUEST_BUDGET_DATA = "REQUEST_BUDGET_DATA";

//action creators
export const requestBudgetData = () => {
    let data = axios.get("/api/budget-data").then(res => res.data)
    return {
        type: REQUEST_BUDGET_DATA,
        payload: data
    }
}

//reducer
export default function reducer(state=initialState, action) {
    switch(action.type) {
        case `${REQUEST_BUDGET_DATA}_PENDING`:
            return {
                ...state,
                loading: true
            }
        case `${REQUEST_BUDGET_DATA}_FULFILLED`:
            return {
                ...state,
                ...action.payload,
                loading: false
            }
        default: 
            return state;
    }
}