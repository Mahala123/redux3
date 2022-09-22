import{createSlice} from '@reduxjs/toolkit';

const UiSlice=createSlice({
    name:'UI',
    initialState:{carIsVisible:false,notification:null},
    reducers:{
        toggle(state){
            state.carIsVisible=!state.carIsVisible
        },
        showNotification(state,action)
        {
            state.notification={
                status:action.payload.stats,
                title:action.payload.title,
                message:action.payload.message
            }
        }
    }
})
export const UiActions=UiSlice.actions
export default UiSlice;