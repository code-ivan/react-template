import React, { useState } from "react"

const Counter = ()=>{
	const [count, setCount] = useState(0)
	return (
		<div>
			Count: {count}
			<div className="mt-8">
			<button className="btn mr-16" onClick={()=>setCount(count - 1)}>Decrement -</button>

			<button className="btn" onClick={()=>setCount(count + 1)}>+ Increment</button>
			</div>
		</div>
	)
}
export default Counter