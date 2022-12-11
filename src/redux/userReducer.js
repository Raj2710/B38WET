import {createSlice} from '@reduxjs/toolkit'

export const userReducer = createSlice({
    name:'users',
    initialState:{
        userData:[
            {
                firstName:"Raj",
                lastName:"Nag",
                email:"nag@raj.com",
                mobile:"123",
                batch:"B38WET"
            },
            {
                firstName:"Nagarajan",
                lastName:"Raj",
                email:"nagarajan@gmail.com",
                mobile:"0987654321",
                batch:"B38WET"
            }
        ]
    },
    reducers:{
        addUser:(state,action)=>{
            state.userData.push(action.payload)
        },
        editUser:(state,action)=>{
            state.userData.splice(action.payload.index,1,action.payload.data)
        },
        deleteUser:(state,action)=>{
            state.userData.splice(action.payload.index,1)
        }
    }
})

export const {addUser,editUser,deleteUser} = userReducer.actions
export default userReducer.reducer