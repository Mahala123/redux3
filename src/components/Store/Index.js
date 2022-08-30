import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart-slice";
import UiSlice from "./UI-slice";
 const store=configureStore({
    reducer:{ui:UiSlice.reducer,cart:cartSlice.reducer}
})
export default store;