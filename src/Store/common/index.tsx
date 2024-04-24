
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth:false,
    username:null,
    pass:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login(state,action){
            console.log('Log In success');
            
        },
        logout(state,action){
            console.log('Log In Fail');
        }
    }
})

const noteSlice = createSlice({
    name:'note',
    initialState:{
        notes:null
    },
    reducers:{
        login(state,action){
            console.log('Log In success');
            
        },
        logout(state,action){
            console.log('Log In Fail');
        }
    }
})

export const {login,logout} = authSlice.actions
export default authSlice.reducer