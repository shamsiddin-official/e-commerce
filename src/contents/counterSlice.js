import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "wishes",
    initialState:{
        value:JSON.parse(localStorage.getItem("wishes"))  || []
    },
    reducers:{
        toggleWishes (state, action){
            let index = state.value.findIndex((el) => el.id===action.payload.id)
            if(index<0){
                state.value =[ ...state.value, action.payload]
                localStorage.setItem("wishes",JSON.stringify(state.value))
            }else{state.value = state.value.filter((el) => el.id!==action.payload.id)
                localStorage.setItem("wishes",JSON.stringify(state.value))

            }
        }
    }
})

export const {toggleWishes}= counterSlice.actions
export default counterSlice.reducer
