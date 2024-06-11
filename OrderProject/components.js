import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { orderFood } from './slice.js'; 

function CustomerCard({ name }) { 
const [orders, setOrders] = useState(''); 

const food = useSelector((state) => state.customer.food); 

const dispatch = useDispatch(); 

const addOrder = () => dispatch(orderFood(orders)); 

return ( 

	<div> 
	<div className="cfcontainer"> 
		<p>{name}</p> 

		<div className="cfcontainer"> 
		{food.map((foo) => ( 
			<div className="c-food">{foo}</div> 
		))} 

		<div className="cficontainer"> 
			<input value={orders} onChange={(event) => 
			setOrders(event.target.value)} /> 

			<button onClick={addOrder}>Add</button> 
		</div> 
		</div> 
	</div> 
	</div> 
); 
} 

export default CustomerCard;
