import { createSlice } from '@reduxjs/toolkit'; 

const initialState = { 
name: [], 
food: [], 
}; 

const customerSlice = createSlice({ 

name: 'customer', 

initialState, 

reducers: { 
	addCustomer: (state, {payload} ) => { 
	state.name.push(payload); 
	}, 

	orderFood: (state, {payload} ) => { 
	state.food.push(payload); 
	}, 
}, 
}); 

export const { addCustomer, orderFood } 
			= customerSlice.actions; 
			
export default customerSlice.reducer;
