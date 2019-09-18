import axios from "axios";

//initialState
const initialState = {
    email: null, 
    firstName: null,
    lastName: null
}
//constants
const REQUEST_USER_DATA = "REQUEST_USER_DATA";

//action creators
export const requestUserData = () => {
    let data = axios.get("/auth/user-data").then(res => res.data)
    return {
        type: REQUEST_USER_DATA,
        payload: data
    }
}

//reducer
export default function reducer(state=initialState, action) {
    switch(action.type){
        case `${REQUEST_USER_DATA}_FULFILLED`:
            const {email, firstName, lastName} = action.payload.user;
            return {
                email, firstName, lastName
            }
        default: 
            return state
    }
}