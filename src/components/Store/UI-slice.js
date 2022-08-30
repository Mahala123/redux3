import{createSlice} from '@reduxjs/toolkit';

const UiSlice=createSlice({
    name:'UI',
    initialState:{carIsVisible:false},
    reducers:{
        toggle(state){
            state.carIsVisible=!state.carIsVisible
        }
    }
})
export const UiActions=UiSlice.actions
export default UiSlice;